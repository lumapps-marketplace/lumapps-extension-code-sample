import axios from 'axios';

export const searchPhotos = async (clientId: string, filter: string, page: number) => {
    const instance = axios.create({
        headers: {
            Authorization: `Client-ID ${clientId}`,
            'Accept-Version': 'v1',
        },
    });

    try {
        const { data } = await instance.get(
            `https://api.unsplash.com/search/photos?query=${filter}&page=${page}&per_page=20`,
        );

        return data;
    } catch (exception: any) {
        return {
            error: exception?.response.data,
            code: exception.response.status,
        };
    }
};
//JkOrqXVjk5ouBmIwwIwcdRsyjUno_ZhYpCpztMmNuXY
