import React, { useState, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Dialog, Emphasis, FlexBox, Orientation, Toolbar, Button, TextField, Size, Message, Kind } from '@lumx/react';

import { AppSecretDialogParams } from '../../widget/types';

export const AppSecretDialog = ({
    secret,
    isOpen,
    close,
    checkTechAccount,
    loadApplicationSecrets,
    selectedApplication,
    setClientSecret,
}: AppSecretDialogParams) => {
    const intl = useIntl();

    const seeSecretButtonRef = useRef(null);

    const [error, setError] = useState<boolean>(false);
    const [password, setPassword] = useState<string>();

    const getAppSecret = async () => {
        if (selectedApplication && password) {
            const user = await checkTechAccount(selectedApplication?.technicalAccount.email, password);

            if (user.error) {
                setError(true);
            } else if (user && user.length > 0 && user[0].token) {
                setError(false);
                loadApplicationSecrets(selectedApplication.id);
            }
        }
    };

    const closeDialog = () => {
        setClientSecret(undefined);
        close();
    };

    return (
        <Dialog isOpen={isOpen} parentElement={seeSecretButtonRef} onClose={closeDialog} size={Size.regular}>
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
                        <FlexBox
                            fillSpace
                            orientation="vertical"
                            gap="medium"
                            className="lumx-spacing-margin-regular lumx-spacing-padding-regular"
                            style={{ border: 'solid 1px' }}
                        >
                            <FlexBox fillSpace orientation={Orientation.horizontal}>
                                <h4 style={{ minWidth: 250 }} className="lumx-typography-subtitle2">
                                    <FormattedMessage id="global_settigns.application_secret.application_id" />
                                </h4>
                                <FlexBox fillSpace vAlign="right">
                                    {selectedApplication.id}
                                </FlexBox>
                            </FlexBox>
                            <FlexBox fillSpace orientation={Orientation.horizontal} vAlign="left">
                                <h4 style={{ minWidth: 250 }} className="lumx-typography-subtitle2">
                                    <FormattedMessage id="global_settigns.application_secret.application_secret" />
                                </h4>
                                <FlexBox fillSpace vAlign="right">
                                    {secret ? (
                                        <span>{secret}</span>
                                    ) : (
                                        <Button size={Size.s} onClick={getAppSecret} isDisabled={!password}>
                                            <FormattedMessage id="global_settigns.application_secret.get_secret" />
                                        </Button>
                                    )}
                                </FlexBox>
                            </FlexBox>
                        </FlexBox>
                    </div>
                    <footer>
                        <Toolbar
                            after={
                                <>
                                    <Button emphasis={Emphasis.medium} onClick={closeDialog}>
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
