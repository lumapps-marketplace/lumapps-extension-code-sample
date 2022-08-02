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

import { removeApplication, removeTechnicalAccount } from '../../api';

import { RemoveAppDialogParams } from '../../widget/types';

export const RemoveAppDialog = ({
    isOpen,
    close,
    checkTechAccount,
    selectedApplication,
    loadApplications,
}: RemoveAppDialogParams) => {
    const intl = useIntl();

    const { id: customerId } = useOrganization();
    const { baseUrl } = useContext();
    const { token } = useCurrentUser();
    const deleteAppButtonRef = useRef(null);

    const [error, setError] = useState<boolean>(false);
    const [password, setPassword] = useState<string>();

    const deleteApp = async () => {
        if (selectedApplication && password && token) {
            const user = await checkTechAccount(selectedApplication?.technicalAccount.email, password);

            if (user.error) {
                setError(true);
            } else if (user && user.length > 0 && user[0].token) {
                setError(false);
                const jwtUser = JSON.parse(Buffer.from(user[0].token.split('.')[1], 'base64').toString());
                removeApplication(baseUrl, token, selectedApplication.id, customerId);
                removeTechnicalAccount(baseUrl, token, jwtUser.sub);
                loadApplications();
                close();
            }
        }
    };

    return (
        <Dialog isOpen={isOpen} parentElement={deleteAppButtonRef} onClose={close} size={Size.regular}>
            {selectedApplication && (
                <>
                    <header>
                        <Toolbar
                            label={
                                <span className="lumx-typography-title">
                                    <span> {selectedApplication.name}</span>
                                </span>
                            }
                        />
                    </header>
                    <div className="lumx-spacing-margin-huge">
                        {error && (
                            <Message kind={Kind.error} hasBackground>
                                <p>
                                    <FormattedMessage id="global_settings.error.user_not_found" />
                                </p>
                            </Message>
                        )}
                        <h4 className="lumx-typography-subtitle2">
                            <FormattedMessage id="global_setting.dialog.title.tech_account" />
                        </h4>
                        <TextField
                            className="mt0 ml lumx-spacing-margin-vertical-big"
                            label={intl.formatMessage({ id: 'global_settigns.user.password' })}
                            type="password"
                            value={password}
                            isRequired
                            onChange={setPassword}
                        />
                        <FlexBox orientation={Orientation.horizontal} vAlign="right">
                            <Button color={ColorPalette.red} onClick={deleteApp} isDisabled={!password}>
                                <FormattedMessage id="global_settings.dialog.delete" />
                            </Button>
                        </FlexBox>
                    </div>
                    <footer>
                        <Toolbar
                            after={
                                <>
                                    <Button emphasis={Emphasis.medium} onClick={close}>
                                        <FormattedMessage id="global_settings.dialog.close" />
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
