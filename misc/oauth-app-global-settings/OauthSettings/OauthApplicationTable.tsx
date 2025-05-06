/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
    Alignment,
    Emphasis,
    FlexBox,
    IconButton,
    Orientation,
    Table,
    TableBody,
    TableCell,
    TableCellVariant,
    TableHeader,
    TableHeaderProps,
    TableRow,
    ThOrder,
} from '@lumx/react';
import { mdiDelete, mdiPencil } from '@lumx/icons';

import { useContext, useOrganization, useCurrentUser } from 'lumapps-sdk-js';
import orderBy from 'lodash/orderBy';
import dateFormat from 'dateformat';

import { listApplication } from '../api';
import { ApplicationProps, ApplicationTableProps } from '../widget/types';
import { RemoveAppDialog } from './Dialogs/RemoveAppDialog';
import { EditAppDialog } from './Dialogs/EditAppDialog';

export const OauthApplicationTable = ({ hasNewApp, setHasNewApp }: ApplicationTableProps) => {
    const intl = useIntl();
    const initialHeaders: Array<Partial<TableHeaderProps>> = [
        {
            isSortable: true,
            label: intl.formatMessage({ id: 'global_settings.array.application' }),
            name: 'name',
        },
        {
            isSortable: true,
            label: intl.formatMessage({ id: 'global_settings.array.created_at' }),
            name: 'createdAt',
            width: '150',
        },
    ];

    const { id: customerId } = useOrganization();
    const { haussmannCell } = useContext();
    const { token } = useCurrentUser();

    const [isRemoveAppOpen, setRemoveAppOpen] = useState<boolean>(false);
    const closeRemoveApp = useCallback(() => setRemoveAppOpen(false), []);
    const toggleRemoveApp = useCallback(() => setRemoveAppOpen(!isRemoveAppOpen), [isRemoveAppOpen]);

    const [isEditAppOpen, setEditAppOpen] = useState<boolean>(false);
    const closeEditApp = useCallback(() => setEditAppOpen(false), []);
    const toogleEditApp = useCallback(() => setEditAppOpen(!isEditAppOpen), [isEditAppOpen]);

    const [selectedApplication, setSelectedApplication] = useState<ApplicationProps>();

    const [tableHeader, setTableHeader] = useState(initialHeaders);
    const [tableBody, setTableBody] = useState<ApplicationProps[]>();
    const toggleSort = useCallback(
        (header) => {
            const sortOrder = header.sortOrder === ThOrder.asc ? ThOrder.desc : ThOrder.asc;
            setTableHeader(
                tableHeader.map((h) => ({
                    ...h,
                    sortOrder: h.name === header.name ? sortOrder : null,
                })),
            );
            setTableBody(orderBy(tableBody, header.name, sortOrder));
        },
        [tableHeader, tableBody],
    );

    const onDeleteApp = (application: ApplicationProps) => {
        setSelectedApplication(application);
        toggleRemoveApp();
    };

    const onEditApp = (application: ApplicationProps) => {
        setSelectedApplication(application);
        toogleEditApp();
    };

    const loadApplications = async () => {
        if (haussmannCell && token) {
            const apps = await listApplication(haussmannCell, token, customerId);

            if (apps.items) {
                setTableBody(apps.items);
            }
        }
    };

    useEffect(() => {
        if (!tableBody || hasNewApp) {
            setHasNewApp(false);
            loadApplications();
        }
    }, [loadApplications, tableBody]);

    return (
        <div>
            <Table hasDividers style={{ minWidth: 620 }}>
                <TableHeader>
                    <TableRow>
                        {tableHeader.map((header) => {
                            const onHeaderClick = () => toggleSort(header);
                            return (
                                <TableCell
                                    key={header.name}
                                    icon={header.icon}
                                    isSortable={header.isSortable}
                                    sortOrder={header.sortOrder}
                                    variant={TableCellVariant.head}
                                    onHeaderClick={onHeaderClick}
                                    width={header.width}
                                >
                                    {header.label}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableBody &&
                        tableBody.map((application) => (
                            <TableRow key={application.id}>
                                <TableCell>
                                    <FlexBox orientation={Orientation.horizontal} hAlign={Alignment.center}>
                                        <span className="lumx-typography-subtitle1">{application.name}</span>
                                        <FlexBox
                                            orientation={Orientation.horizontal}
                                            hAlign={Alignment.center}
                                            marginAuto={Alignment.left}
                                        >
                                            <IconButton
                                                emphasis={Emphasis.low}
                                                icon={mdiPencil}
                                                label={intl.formatMessage({ id: 'global_settings.array.edit' })}
                                                onClick={() => onEditApp(application)}
                                            />
                                            <IconButton
                                                emphasis={Emphasis.low}
                                                icon={mdiDelete}
                                                label={intl.formatMessage({ id: 'global_settings.array.delete' })}
                                                onClick={() => onDeleteApp(application)}
                                            />
                                        </FlexBox>
                                    </FlexBox>
                                </TableCell>
                                <TableCell>
                                    {dateFormat(
                                        application.createdAt,
                                        intl.formatMessage({ id: 'global_settigns.date_format' }),
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>

            {!tableBody ||
                (tableBody.length === 0 && (
                    <FlexBox
                        fillSpace
                        orientation={Orientation.horizontal}
                        vAlign="center"
                        className="lumx-spacing-margin-big"
                    >
                        <p className="lumx-typography-subtitle1">
                            <FormattedMessage id="global_settings.array.empty" />
                        </p>
                    </FlexBox>
                ))}

            {selectedApplication && (
                <RemoveAppDialog
                    close={closeRemoveApp}
                    isOpen={isRemoveAppOpen}
                    loadApplications={loadApplications}
                    selectedApplication={selectedApplication}
                />
            )}

            {selectedApplication && (
                <EditAppDialog
                    close={closeEditApp}
                    isOpen={isEditAppOpen}
                    loadApplications={loadApplications}
                    selectedApplication={selectedApplication}
                />
            )}
        </div>
    );
};
