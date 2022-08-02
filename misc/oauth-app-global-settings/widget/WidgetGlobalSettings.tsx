import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Dialog, Button, Size, Toolbar, Emphasis, FlexBox, Orientation } from '@lumx/react';
import { FormattedMessage, IntlProvider, useIntl } from 'react-intl';
import { PredefinedErrorBoundary, useContext, useOrganization, useCurrentUser, useLanguage } from 'lumapps-sdk-js';

import { SettingsDialogContent } from '../OauthSettings/SettingsDialogContent';
import { GetApplicationSecret } from '../OauthSettings/GetApplicationSecrets';
import { CreateUser } from '../OauthSettings/CreateUser';
import { CreateApplication } from '../OauthSettings/CreateApplication';
import { OauthApplicationTable } from '../OauthSettings/OauthApplicationTable';
import { createApplication, createUser, getApplicationSecrets, authenticateTechnicalAccount } from '../api';

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
    const intl = useIntl();
    const buttonRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen(!isOpen), [isOpen]);
    const [activeStep, setActiveStep] = useState(0);
    const { id: customerId } = useOrganization();
    const { baseUrl } = useContext();
    const { token } = useCurrentUser();

    const [error, setError] = useState<any>();

    // Oauth user attributes
    const [email, setEmail] = useState<string>();
    const [fullName, setFullName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    // OAuth application attribute
    const [name, setName] = useState<string>();

    const [createdUser, setCreatedUser] = useState<any>();
    const [createdApplication, setCreatedApplication] = useState<ApplicationProps>();
    const [clientSecret, setClientSecret] = useState<string>();

    const isStepComplete = (step: number) => {
        switch (step) {
            case 0:
                return createdUser && createdUser.id;
            case 1:
                return createdApplication && createdApplication.id;
            default:
                return false;
        }
    };

    const isStepDisabled = (step: number) => {
        switch (step) {
            case 1:
                return !createdUser || !createdUser.id;
            case 2:
                return !createdUser || !createdUser.id;
            default:
                return false;
        }
    };

    const loadApplicationSecrets = async (applicationId: string | undefined) => {
        const appId = applicationId || (createdApplication && createdApplication.id);

        if (token && appId) {
            const secrets = await getApplicationSecrets(baseUrl, token, appId, customerId);
            setClientSecret(secrets.clientSecret);
        }
    };

    const steps = [
        {
            isDisabled: isStepDisabled(0),
            isComplete: isStepComplete(0),
            hasError: false,
            label: intl.formatMessage({ id: 'global_settings.step.create_user' }),
            component: (
                <CreateUser
                    fullName={fullName}
                    setFullName={setFullName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                />
            ),
        },
        {
            isDisabled: isStepDisabled(1),
            isComplete: isStepComplete(1),
            hasError: false,
            label: intl.formatMessage({ id: 'global_settings.step.create_application' }),
            component: <CreateApplication name={name} setName={setName} />,
        },
        {
            isDisabled: isStepDisabled(2),
            isComplete: isStepComplete(2),
            hasError: false,
            label: intl.formatMessage({ id: 'global_settings.step.get_app_secret' }),
            component: (
                <GetApplicationSecret
                    getApplicationSecrets={loadApplicationSecrets}
                    secret={clientSecret}
                    applicationId={createdApplication && createdApplication.id}
                />
            ),
        },
    ];

    const checkTechAccount = async (userEmail: string, userPassword: string) => {
        const user = await authenticateTechnicalAccount(baseUrl, userEmail, userPassword);

        return user;
    };

    const performStepAction = async () => {
        switch (activeStep) {
            case 0:
                if (token && fullName && email && password) {
                    const user = await createUser(baseUrl, token, fullName, email, password, customerId);

                    if (user && user.error) {
                        setError(user.error);
                    } else if (user && user.id) {
                        setError(undefined);
                        setCreatedUser(user);
                        setActiveStep(activeStep + 1);
                    }
                }
                break;
            case 1:
                if (token && email && password && name) {
                    const techAccount = { email, password };
                    const application = await createApplication(baseUrl, token, name, techAccount, customerId);

                    if (application && application.error) {
                        setError(application.error);
                    } else if (application && application.id) {
                        setError(undefined);
                        setCreatedApplication(application);
                        setActiveStep(activeStep + 1);
                    }
                }
                break;
            default:
                break;
        }
    };

    const isStepInvalid = () => {
        const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        switch (activeStep) {
            case 0:
                return !(
                    fullName !== undefined &&
                    email !== undefined &&
                    password !== undefined &&
                    confirmPassword !== undefined &&
                    password === confirmPassword &&
                    password.length > 7 &&
                    emailRegex.test(email)
                );
            case 1:
                return name === undefined;
            default:
                return false;
        }
    };

    const onNextButton = () => {
        if (activeStep !== steps.length - 1) {
            performStepAction();
        } else {
            close();
        }
    };

    const onOpenDialogClick = () => () => {
        toggle();
    };

    return (
        <div>
            <FlexBox orientation={Orientation.horizontal} vAlign="right">
                <Button className="lumx-spacing-margin-horizontal-tiny" ref={buttonRef} onClick={onOpenDialogClick()}>
                    <FormattedMessage id="global_settings.title.create_app" />
                </Button>
            </FlexBox>

            <OauthApplicationTable
                loadApplicationSecrets={loadApplicationSecrets}
                secret={clientSecret}
                checkTechAccount={checkTechAccount}
                setClientSecret={setClientSecret}
            />

            <Dialog isOpen={isOpen} parentElement={buttonRef} onClose={close} size={Size.regular}>
                <header>
                    <Toolbar
                        label={
                            <span className="lumx-typography-title">
                                <FormattedMessage id="global_settings.title.create_app" />
                            </span>
                        }
                    />
                </header>

                <SettingsDialogContent
                    steps={steps}
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    error={error}
                />

                <footer>
                    <Toolbar
                        after={
                            <>
                                <Button emphasis={Emphasis.medium} onClick={close}>
                                    <FormattedMessage id="global_settings.dialog.cancel" />
                                </Button>
                                <Button
                                    className="lumx-spacing-margin-left-regular"
                                    isDisabled={isStepInvalid()}
                                    onClick={onNextButton}
                                >
                                    {activeStep !== steps.length - 1 ? (
                                        <FormattedMessage id="global_settings.step.next" />
                                    ) : (
                                        <FormattedMessage id="global_settings.dialog.close" />
                                    )}
                                </Button>
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
