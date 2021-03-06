import { HttpException, HttpOptions, HttpService } from "../HttpService";

export class FetchHttpService implements HttpService {
    constructor(private baseUrl: string) {}

    private getApiURL(url: string) {
        return new URL(this.baseUrl + url).href;
    }

    get(url: string, options?: HttpOptions) {
        return fetch(this.getApiURL(url), {
            method: 'GET',
            headers: options?.headers,
        })
            .then(response => {
                if (!response.ok) {
                    throw new HttpException("Retrieving data was not successful.");
                }
                return response.json()
            })
    }

    post(url: string, data?: {}, options?: HttpOptions) {
        return fetch(this.getApiURL(url), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (!response.ok) {
                throw new HttpException("Sending data was not successful.");
            }
            return response.json()
        })
    }
}