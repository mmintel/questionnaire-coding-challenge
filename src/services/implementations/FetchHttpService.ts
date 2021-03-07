import { HttpException, HttpOptions, HttpService } from "../HttpService";

interface FetchHeaders {
    [key: string]: string;
}

interface FetchOptions {
    method?: "GET" | "POST";
    headers?: FetchHeaders;
    body?: any;
}

interface Response {
	json(): Promise<any>;
	ok: boolean;
}

export type FetchMethod = (url: string, options?: FetchOptions) => Promise<Response>;

export class FetchHttpService implements HttpService {
    constructor(private baseUrl: string, private fetch: FetchMethod) {}

    private getApiURL(url: string) {
        return new URL(this.baseUrl + url).href;
    }

    async get(url: string, options?: HttpOptions) {
        const response = await this.fetch(this.getApiURL(url), {
            method: 'GET',
            headers: options?.headers,
        })

        if (!response.ok) {
            throw new HttpException("Retrieving data was not successful.");
        }

        return response.json()
    }

    async post(url: string, data?: {}, options?: HttpOptions) {
        const response = await fetch(this.getApiURL(url), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new HttpException("Sending data was not successful.");
        }

        return response.json()
    }
}