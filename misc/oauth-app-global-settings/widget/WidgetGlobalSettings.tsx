import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Dialog, Button, Size, Toolbar, Emphasis, FlexBox, Orientation } from '@lumx/react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { PredefinedErrorBoundary, useContext, useOrganization, useCurrentUser, useLanguage } from 'lumapps-sdk-js';

import { CreateApplication } from '../OauthSettings/CreateApplication';
import { ApplicationDetails } from '../OauthSettings/ApplicationDetails';
import { OauthApplicationTable } from '../OauthSettings/OauthApplicationTable';
import { createApplication } from '../api';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';
import { ApplicationProps } from './types';

type WidgetGlobalSettings = import('lumapps-sdk-js').GlobalSettingsComponent<import('./types').SampleAppGlobalParams>;

/**
 * Render the widget Picsum settings form.
 *
 * @param {Object} props The settings component properties.
 */

const WithIntlGloablSettings: WidgetGlobalSettings = ({ properties = {}, exportProp }) => {
    const buttonRef = useRef(null);
    const { haussmannCell } = useContext();
    const { id: customerId } = useOrganization();
    const { token } = useCurrentUser();
    const [isOpen, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen(!isOpen), [isOpen]);
    const [hasNewApp, setHasNewApp] = useState<boolean>(false);
    const [createdApp, setCreatedApp] = useState<ApplicationProps>();

    // OAuth application attribute
    const [name, setName] = useState<string>();

    const onOpenDialogClick = () => () => {
        toggle();
    };

    const createApp = async () => {
        if (haussmannCell && token && name) {
            const app = await createApplication(haussmannCell, token, name, customerId);
            setCreatedApp(app);
            setHasNewApp(true);
            // close();
        }
    };

    return (
        <div>
            <FlexBox orientation={Orientation.horizontal} vAlign="right">
                <Button className="lumx-spacing-margin-horizontal-tiny" ref={buttonRef} onClick={onOpenDialogClick()}>
                    <FormattedMessage id="global_settings.title.create_app" />
                </Button>
            </FlexBox>

            <OauthApplicationTable hasNewApp={hasNewApp} setHasNewApp={setHasNewApp} />

            <Dialog isOpen={isOpen} parentElement={buttonRef} onClose={close} size={Size.tiny}>
                <header>
                    <Toolbar
                        label={
                            <span className="lumx-typography-title">
                                <FormattedMessage id="global_settings.title.create_app" />
                            </span>
                        }
                    />
                </header>

                {!createdApp && <CreateApplication name={name} setName={setName} />}

                {createdApp && <ApplicationDetails application={createdApp} />}

                <footer>
                    <Toolbar
                        after={
                            <>
                                <Button emphasis={Emphasis.medium} onClick={close}>
                                    {!createdApp && <FormattedMessage id="global_settings.dialog.cancel" />}
                                    {createdApp && <FormattedMessage id="global_settings.dialog.close" />}
                                </Button>
                                {!createdApp && (
                                    <Button className="lumx-spacing-margin-left-regular" onClick={createApp}>
                                        <FormattedMessage id="global_settings.dialog.save" />
                                    </Button>
                                )}
                            </>
                        }
                    />
                </footer>
            </Dialog>
        </div>
    );
};

export const WidgetGlobalSettings: WidgetGlobalSettings = (props) => {
    const { displayLanguage } = useLanguage();
    const messages: Record<string, Record<string, string>> = {
        en: messagesEn,
        fr: messagesFr,
    };
    const lang = useMemo(() => (Object.keys(messages).includes(displayLanguage) ? displayLanguage : 'en'), [
        displayLanguage,
        messages,
    ]);

    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <PredefinedErrorBoundary>
                <WithIntlGloablSettings {...props} />
            </PredefinedErrorBoundary>
        </IntlProvider>
    );
};
