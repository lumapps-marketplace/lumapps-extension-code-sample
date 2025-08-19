import axios from 'axios';

const getAxiosInstance = (token: string) => {
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const createApplication = async (haussmannCell: string, token: string, name: string, customerId: string) => {
    try {
        const { data } = await getAxiosInstance(token).post(
            `${haussmannCell}/v2/organizations/${customerId}/applications`,
            {
                name,
                scopes: ['default'],
            },
        );

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

export const getApplicationSecrets = async (
    haussmannCell: string,
    token: string,
    applicationId: string,
    customerId: string,
) => {
    try {
        const { data } = await getAxiosInstance(token).get(
            `${haussmannCell}/v2/organizations/${customerId}/applications/${applicationId}/secrets`,
        );

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

/**
 * Retrieve the list of OPAuth application on a customer platform
 *
 * @param baseUrl Base URl of the LumApps customer platform
 * @param token User token (Global admin user)
 * @param customerId Identifier of the customer platform
 * @returns The list of Oauth applications declared on the customer platform
 */
export const listApplication = async (haussmannCell: string, token: string, customerId: string) => {
    try {
        const { data } = await getAxiosInstance(token).get(
            `${haussmannCell}/v2/organizations/${customerId}/applications`,
        );

        return data;
    } catch (exception: any) {
        console.log(exception);
        return exception;

        // return { error: exception.response.data.error };
    }
};

export const authenticateTechnicalAccount = async (baseUrl: string, email: string, password: string) => {
    let loginURL = 'https://login.lumapps.com/v1/login/email';

    if (baseUrl.includes('preview')) {
        loginURL = 'https://login.beta.lumapps.com/v1/login/email';
    } else if (baseUrl.includes('sites-ba') || baseUrl.includes('sites-test')) {
        loginURL = 'https://login.dev.lumapps.com/v1/login/email';
    } else if (baseUrl.includes('sites-staging')) {
        loginURL = 'https://login.stag.lumapps.com/v1/login/email';
    }

    /* 
    switch (environment) {
        case ENVIRONMENT.BETA:
            loginURL = 'https://login.beta.lumapps.com/v1/login/email';
            break;
        case ENVIRONMENT.PRODUCTION:
            loginURL = 'https://login.lumapps.com/v1/login/email';
            break;
        case ENVIRONMENT.DEV:
            loginURL = 'https://login-ba.dev.lumapps.com/v1/login/email';
            break;
        case ENVIRONMENT.STAGING:
            loginURL = 'https://login.stag.lumapps.com/v1/login/email';
            break;
        default:
            break;
    } */
    try {
        const { data } = await axios.post(loginURL, {
            email,
            password,
        });

        return data;
    } catch (exception) {
        return { error: true, message: 'User not found' };
    }
};

export const editApplication = async (
    haussmannCell: string,
    token: string,
    name: string,
    customerId: string,
    applicationId: string,
) => {
    try {
        const { data } = await getAxiosInstance(token).put(
            `${haussmannCell}/v2/organizations/${customerId}/applications/${applicationId}`,
            {
                name,
                scopes: ['default'],
            },
        );

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

export const removeApplication = async (
    haussmannCell: string,
    token: string,
    applicationId: string,
    customerId: string,
) => {
    try {
        const { data } = await getAxiosInstance(token).delete(
            `${haussmannCell}/v2/organizations/${customerId}/applications/${applicationId}`,
        );

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

export const removeTechnicalAccount = async (baseUrl: string, token: string, userId: string) => {
    try {
        const { data } = await getAxiosInstance(token).post(`${baseUrl}_ah/api/lumsites/v1/user/deleteMulti`, {
            uid: [userId],
        });

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};
