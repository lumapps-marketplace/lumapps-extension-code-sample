import React, { useState, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Dialog, Emphasis, Toolbar, Button, Size, TextField } from '@lumx/react';
import { useContext, useOrganization, useCurrentUser } from 'lumapps-sdk-js';

import { editApplication } from '../../api';

import { RemoveAppDialogParams } from '../../widget/types';

export const EditAppDialog = ({ isOpen, close, selectedApplication, loadApplications }: RemoveAppDialogParams) => {
    const intl = useIntl();
    const { id: customerId } = useOrganization();
    const { haussmannCell } = useContext();
    const { token } = useCurrentUser();
    const deleteAppButtonRef = useRef(null);
    const [name, setName] = useState(selectedApplication.name);

    const editApp = async () => {
        if (selectedApplication && token && haussmannCell) {
            await editApplication(haussmannCell, token, name, customerId, selectedApplication.id);
            await loadApplications();
            close();
        }
    };

    return (
        <Dialog isOpen={isOpen} parentElement={deleteAppButtonRef} onClose={close} size={Size.tiny}>
            {selectedApplication && (
                <>
                    <header>
                        <Toolbar label={<span className="lumx-typography-title">Confirm dialog</span>} />
                    </header>

                    <div className="lumx-spacing-padding-horizontal-huge">
                        <TextField
                            className="mt0 ml lumx-spacing-margin-vertical-big"
                            label={intl.formatMessage({ id: 'global_settigns.application.name' })}
                            value={name}
                            isRequired
                            onChange={setName}
                        />
                    </div>

                    <footer>
                        <Toolbar
                            after={
                                <>
                                    <Button emphasis={Emphasis.medium} onClick={close}>
                                        <FormattedMessage id="global_settings.dialog.cancel" />
                                    </Button>
                                    <Button className="lumx-spacing-margin-left-regular" onClick={editApp}>
                                    <FormattedMessage id="global_settings.dialog.save" />
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
