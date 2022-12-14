import axios from 'axios';
import { TechnicalAccountProps } from '../widget/types';

const getAxiosInstance = (token: string) => {
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

/**
 * Create a user account for the OAuth application
 * 
 * @param baseUrl Base URl of the LumApps customer platform
 * @param token User token (Global admin user)
 * @param fullName The technical full name
 * @param email  The technical aacoutn email
 * @param password  The technical account password
 * @param customerId Identifier of the customer platform
 * @returns The LumApps user account created
 */
export const createUser = async (
    baseUrl: string,
    token: string,
    fullName: string,
    email: string,
    password: string,
    customerId: string,
) => {
    try {
        const { data } = await getAxiosInstance(token).post(`${baseUrl}_ah/api/lumsites/v1/user/save`, {
            accountType: 'external',
            active: true,
            email,
            feedKeys: [],
            firstName: fullName,
            lastName: fullName,
            isHidden: true,
            isVisible: false,
            nonTechnicalFeedKeys: [],
            customer: customerId,
            fullName,
            password,
            rePassword: password,
            status: 'enabled',
            subscriptions: [],
        });
        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

/**
 * Create the OAuth application on the customer platform
 * 
 * @param baseUrl Base URl of the LumApps customer platform
 * @param token User token (Global admin user)
 * @param name The application name
 * @param techAccount The technical account information (email & password)
 * @param customerId Identifier of the customer platform
 * @returns The created application
 */
export const createApplication = async (
    baseUrl: string,
    token: string,
    name: string,
    techAccount: TechnicalAccountProps,
    customerId: string,
) => {
    try {
        const { data } = await getAxiosInstance(token).post(
            `${baseUrl}_ah/api/lumsites/v2/organizations/${customerId}/applications`,
            {
                name,
                scopes: ['default'],
                technicalAccount: {
                    email: techAccount.email,
                    password: techAccount.password,
                },
            },
        );

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

/**
 * 
 * @param baseUrl Base URl of the LumApps customer platform
 * @param token User token (Global admin user)
 * @param applicationId The identifier of the OAuth application
 * @param customerId Identifier of the customer platform
 * @returns the client secret of the OAuth application
 */
export const getApplicationSecrets = async (
    baseUrl: string,
    token: string,
    applicationId: string,
    customerId: string,
) => {
    try {
        const { data } = await getAxiosInstance(token).get(
            `${baseUrl}_ah/api/lumsites/v2/organizations/${customerId}/applications/${applicationId}/secrets`,
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
export const listApplication = async (baseUrl: string, token: string, customerId: string) => {
    try {
        const { data } = await getAxiosInstance(token).get(
            `${baseUrl}_ah/api/lumsites/v2/organizations/${customerId}/applications`,
        );

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

/**
 * Authenticate the technical account with it's email and password
 * 
 * @param baseUrl Base URl of the LumApps customer platform
 * @param email User email
 * @param password User password
 * @returns The login returns obkect
 */
export const authenticateTechnicalAccount = async (baseUrl: string, email: string, password: string) => {
    let loginURL = 'https://login.lumapps.com/v1/login/email';

    if (baseUrl.includes('preview')) {
        loginURL = 'https://login.beta.lumapps.com/v1/login/email';
    }

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

/**
 * Remove the Oauth application from the customer platform
 * 
 * @param baseUrl Base URl of the LumApps customer platform
 * @param token User token (Global admin user)
 * @param applicationId The identifier of the application
 * @param customerId Identifier of the customer platform
 * @returns The remove sucess code 
 */
export const removeApplication = async (baseUrl: string, token: string, applicationId: string, customerId: string) => {
    try {
        const { data } = await getAxiosInstance(token).delete(
            `${baseUrl}_ah/api/lumsites/v2/organizations/${customerId}/applications/${applicationId}`,
        );

        return data;
    } catch (exception: any) {
        return { error: exception.response.data.error };
    }
};

/**
 * Remove the technical aacount from the customer platform
 * 
 * @param baseUrl Base URl of the LumApps customer platform
 * @param token User token (Global admin user)
 * @param userId The identifier of the technical account
 * @returns The remove sucess code 
 */
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
