import axios from 'axios';
import React from 'react';
import { RESULT_STATUS, ExtensionSearchInput, ExtensionSearchOutput } from 'lumapps-sdk-js';
import { getUrl, transformWikipediaResponse } from './utils';

export const useSearch = ({ query, page = 0 }: ExtensionSearchInput): ExtensionSearchOutput => {
    const [data, setData] = React.useState<ExtensionSearchOutput>({
        results: [],
        hasMore: false,
        status: RESULT_STATUS.INITIAL,
        totalCount: 0,
    });

    const [status, setStatus] = React.useState<RESULT_STATUS>(RESULT_STATUS.INITIAL);

    React.useEffect(() => {
        try {
            setStatus(RESULT_STATUS.LOADING);
            axios.get(getUrl(query, page)).then((response) => {
                const newData = transformWikipediaResponse(response?.data);
                if (page > 0) {
                    // should keep previous results
                    newData.results = [...data.results, ...newData.results];
                }
                setData(newData);
                setStatus(RESULT_STATUS.FETCHED);
            });
        } catch (error) {
            setStatus(RESULT_STATUS.ERROR);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page]);

    return {
        ...data,
        status,
    };
};
