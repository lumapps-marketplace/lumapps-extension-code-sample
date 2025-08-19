import { RESULT_STATUS, ExtensionSearchResult, ExtensionSearchOutput } from 'lumapps-sdk-js';
import { WikipediaResponse, WikipediaResultItem } from './types';

export const getUrl = (query: string, page = 0, pageSize = 10): string => {
    return `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${query}&sroffset=${
        pageSize * page
    }&srlimit=${pageSize}&format=json`;
};

export const transformWikipediaResult = (wikipediaResult: WikipediaResultItem): ExtensionSearchResult => {
    return {
        id: `${wikipediaResult?.pageid}`,
        title: wikipediaResult?.title,
        url: `https://en.wikipedia.org/wiki/${wikipediaResult?.title?.replaceAll(' ', '_')}`,
        thumbnail: undefined,
        source: 'wikipedia',
        snippet: wikipediaResult?.snippet,
    };
};

export const transformWikipediaResponse = (wikipediaResponse: WikipediaResponse): ExtensionSearchOutput => {
    return {
        status: RESULT_STATUS.FETCHED,
        results: wikipediaResponse?.query?.search?.map(transformWikipediaResult),
        totalCount: wikipediaResponse?.query?.searchinfo?.totalhits,
        hasMore: !!wikipediaResponse?.continue?.sroffset,
    };
};
