import { HttpOptions, HttpService } from "../HttpService";

export class FetchHttpService implements HttpService {
    constructor(private baseUrl: string) {}

    private getApiURL(url: string) {
        return new URL(`${this.baseUrl}/${url}`).href;
    }

    get(url: string, options?: HttpOptions) {
        return fetch(this.getApiURL(url), {
            method: 'GET',
            headers: options?.headers,
        }).then(response => response.json())
    }

    post(url: string, data?: {}, options?: HttpOptions) {
        return fetch(this.getApiURL(url), {
            method: 'POST',
            headers: options?.headers,
            body: JSON.stringify(data),
        }).then(response => response.json())
    }
}