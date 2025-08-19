import { Dispatch, SetStateAction } from 'react';

export interface ApplicationProps {
    clientSecret?: string;
    createdBy: string;
    id: string;
    createdAt: string;
    deletedAt?: string;
    name: string;
    scopes: string[];
    updatedAt: string;
    updatedBy: string;
    status: string;
}

export interface ApplicationDetailsParams {
    application: ApplicationProps;
}

export interface ApplicationTableProps {
    hasNewApp: boolean;
    setHasNewApp: Dispatch<SetStateAction<boolean>>;
}

export interface SampleAppGlobalParams {
    baseUrl: string;
}

export interface SampleAppParams {
    imageId: string;
    useGreyScale: boolean;
    useBlur: boolean;
    blur: number;
}

export interface SettingsDialogContentParams {
    setActiveStep: Dispatch<SetStateAction<number>>;
    activeStep: number;
    error: any;
}

export interface CreateApplicationParams {
    name: string | undefined;
    setName: Dispatch<SetStateAction<string | undefined>>;
}

export interface TechnicalAccountProps {
    email: string;
    password: string;
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
    isOpen: boolean;
    close: () => void;
    selectedApplication: ApplicationProps;
    loadApplications: () => void;
}
