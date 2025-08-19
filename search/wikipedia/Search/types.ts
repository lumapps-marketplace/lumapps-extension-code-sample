export interface WikipediaResultItem {
    pageid: number;
    title: string;
    snippet: string;
}
export interface WikipediaResponse {
    query: {
        search: WikipediaResultItem[];
        searchinfo: {
            totalhits: number;
        };
    };
    continue: {
        sroffset: number;
    };
}
