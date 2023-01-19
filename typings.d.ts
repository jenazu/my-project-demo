export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export interface SearchResult {
    organic_results: [
        {
            positiion: number;
            title: string;
            link: string;
            thumbnail: string
            snippet: string
        }
    ]
}