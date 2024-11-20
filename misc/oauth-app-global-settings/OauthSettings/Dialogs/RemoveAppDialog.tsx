import React, { useState, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
    Dialog,
    Emphasis,
    FlexBox,
    Orientation,
    Toolbar,
    Button,
    TextField,
    Size,
    Message,
    Kind,
    ColorPalette,
} from '@lumx/react';
import { useContext, useOrganization, useCurrentUser } from 'lumapps-sdk-js';

import { removeApplication } from '../../api';

import { RemoveAppDialogParams } from '../../widget/types';

export const RemoveAppDialog = ({ isOpen, close, selectedApplication, loadApplications }: RemoveAppDialogParams) => {
    const { id: customerId } = useOrganization();
    const { haussmannCell } = useContext();
    const { token } = useCurrentUser();
    const deleteAppButtonRef = useRef(null);

    const deleteApp = async () => {
        if (selectedApplication && token && haussmannCell) {
            await removeApplication(haussmannCell, token, selectedApplication.id, customerId);
            await loadApplications();
            close();
        }
    };

    return (
        <Dialog isOpen={isOpen} parentElement={deleteAppButtonRef} onClose={close} size={Size.regular}>
            {selectedApplication && (
                <>
                    <header>
                        <Toolbar label={<span className="lumx-typography-title">Confirm dialog</span>} />
                    </header>
                    <p className="lumx-spacing-padding-horizontal-huge">
                        <FormattedMessage id="global_settings.delete.confirm" />.
                    </p>
                    <footer>
                        <Toolbar
                            after={
                                <>
                                    <Button emphasis={Emphasis.medium} onClick={close}>
                                        <FormattedMessage id="global_settings.dialog.cancel" />
                                    </Button>
                                    <Button className="lumx-spacing-margin-left-regular" onClick={deleteApp}>
                                        <FormattedMessage id="global_settings.dialog.delete" />
                                    </Button>
                                </>
                            }
                        />
                    </footer>
                </>
            )}
        </Dialog>
    );
};
