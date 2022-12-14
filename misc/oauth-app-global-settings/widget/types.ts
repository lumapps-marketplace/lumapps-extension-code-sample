import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface TechnicalAccountProps {
    email: string;
    password: string;
}

export interface ApplicationProps {
    id: string;
    createdAt: string;
    deletedAt: string;
    name: string;
    scopes: string[];
    updatedAt: string;
    technicalAccount: {
        email: string;
    };
}

export interface SampleAppGlobalParams {
    baseUrl: string;
}

export interface OauthStepParams {
    isDisabled: boolean;
    isComplete: boolean;
    hasError: boolean;
    label: string;
    component: ReactNode;
}

export interface SettingsDialogContentParams {
    steps: OauthStepParams[];
    setActiveStep: Dispatch<SetStateAction<number>>;
    activeStep: number;
    error: any;
}

export interface GetApplicationSecretsParams {
    getApplicationSecrets: (applicationId?: string | undefined) => void;
    secret: string | undefined;
    applicationId: string | undefined;
}

export interface CreateUserParams {
    fullName: string | undefined;
    setFullName: Dispatch<SetStateAction<string | undefined>>;
    email: string | undefined;
    setEmail: Dispatch<SetStateAction<string | undefined>>;
    password: string | undefined;
    setPassword: Dispatch<SetStateAction<string | undefined>>;
    confirmPassword: string | undefined;
    setConfirmPassword: Dispatch<SetStateAction<string | undefined>>;
}

export interface CreateApplicationParams {
    name: string | undefined;
    setName: Dispatch<SetStateAction<string | undefined>>;
}

export interface OauthApplicationTableParams {
    loadApplicationSecrets: (applicationId?: string | undefined) => void;
    checkTechAccount: (userEmail: string, userPassword: string) => any;
    secret: string | undefined;
    setClientSecret: Dispatch<SetStateAction<string | undefined>>;
}

export interface AppSecretDialogParams {
    loadApplicationSecrets: (applicationId?: string | undefined) => void;
    checkTechAccount: (userEmail: string, userPassword: string) => any;
    secret: string | undefined;
    isOpen: boolean;
    close: () => void;
    selectedApplication: ApplicationProps;
    setClientSecret: Dispatch<SetStateAction<string | undefined>>;
}

export interface RemoveAppDialogParams {
    checkTechAccount: (userEmail: string, userPassword: string) => any;
    isOpen: boolean;
    close: () => void;
    selectedApplication: ApplicationProps;
    loadApplications: () => void;
}
