export interface HttpService {
    get<T = any>(url: string, options?: HttpOptions): Promise<T>;
    post<T = any>(url: string, data?: {}, options?: HttpOptions): Promise<T>;
}

export interface HttpOptions {
    headers?: HttpHeaders;
}

export interface HttpHeaders {
    [header: string]: string;
}

export class HttpException extends Error {}