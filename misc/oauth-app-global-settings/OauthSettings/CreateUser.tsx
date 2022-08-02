import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { TextField } from '@lumx/react';
import { useDebounce } from 'lumapps-sdk-js';
import { CreateUserParams } from '../widget/types';

export const CreateUser = ({
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
}: CreateUserParams) => {
    const intl = useIntl();
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    const [errorConfirmedPassword, setErrorConfirmedPassword] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const debouncedConfirmPassword = useDebounce(confirmPassword, 800);

    useEffect(() => {
        if (debouncedConfirmPassword && password && password !== debouncedConfirmPassword) {
            setErrorConfirmedPassword(true);
        } else {
            setErrorConfirmedPassword(false);
        }
    }, [debouncedConfirmPassword, password, errorConfirmedPassword]);

    useEffect(() => {
        if (password && password.length < 8) {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }
    }, [password, errorPassword]);

    useEffect(() => {
        if (email && !emailRegex.test(email)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    }, [email, emailRegex, errorEmail]);

    return (
        <>
            <TextField
                className="mt0 ml lumx-spacing-margin-vertical-big"
                label={intl.formatMessage({ id: 'global_settigns.user.full_name' })}
                value={fullName}
                isRequired
                onChange={setFullName}
            />
            <TextField
                className="mt0 ml lumx-spacing-margin-vertical-big"
                label={intl.formatMessage({ id: 'global_settigns.user.email' })}
                value={email}
                isRequired
                hasError={errorEmail}
                onChange={setEmail}
            />

            <TextField
                className="mt0 ml lumx-spacing-margin-vertical-big"
                label={intl.formatMessage({ id: 'global_settigns.user.password' })}
                type="password"
                helper={intl.formatMessage({ id: 'global_settigns.user.password.helper' })}
                value={password}
                isRequired
                hasError={errorPassword}
                onChange={setPassword}
            />

            <TextField
                className="mt0 ml lumx-spacing-margin-vertical-big"
                label={intl.formatMessage({ id: 'global_settigns.user.confirm_password' })}
                type="password"
                isRequired
                value={confirmPassword}
                onChange={setConfirmPassword}
                hasError={errorConfirmedPassword}
                isValid={debouncedConfirmPassword && password && !errorConfirmedPassword}
            />
        </>
    );
};
