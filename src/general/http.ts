const enum HttpMethods {
    'GET' = 'GET',
    'POST' = 'POST',
    'DELETE' = 'DELETE',
    'PUT' = 'PUT',
}

type HttpOptions = {
    method?: HttpMethods;
    headers?: Record<string, string>;
    data?: object;
    timeout?: number;
}

export class HTTP {
    get = (url: string, options: HttpOptions = {}): Promise<unknown> => {
        return this._request(url, { ...options, method: HttpMethods.GET }, options.timeout);
    };

    put = (url: string, options: HttpOptions = {}): Promise<unknown> => {
        return this._request(url, { ...options, method: HttpMethods.PUT }, options.timeout);
    };

    post = (url: string, options: HttpOptions = {}): Promise<unknown> => {
        return this._request(url, { ...options, method: HttpMethods.POST }, options.timeout);
    };

    delete = (url: string, options: HttpOptions = {}): Promise<unknown> => {
        return this._request(url, { ...options, method: HttpMethods.DELETE }, options.timeout);
    };

    private _request = (url: string, options: {
        method?: string;
        headers?: Record<string, string>;
        data?: object;
        timeout?: number;
    } = {}, timeout = 5000): Promise<unknown> => {
        const { method = HttpMethods.GET, headers = {}, data = {} } = options;
        const self = this;

        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();

            if (!method) {
                reject('No method');
                return;
            }

            if (method === HttpMethods.GET) {
                xhr.open(method, url + self._queryStringify(data));
            } else {
                xhr.open(method, url);
            }

            for (const [key, value] of Object.entries(headers)) {
                xhr.setRequestHeader(key, value);
            }
            xhr.timeout = timeout;

            xhr.onload = () => resolve(xhr);
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === HttpMethods.GET) {
                xhr.send();
            } else {
                xhr.send(data as XMLHttpRequestBodyInit);
            }
        });
    };

    private _queryStringify(data: object): string {
        if (typeof data !== 'object') {
            throw new Error('Data must be object');
        }

        let query = [];
        for (const [key, value] of Object.entries(data)) {
            query.push(`${key}=${value}`);
        }
        return query.length ? `?${query.join('&')}` : '';
    }
}
