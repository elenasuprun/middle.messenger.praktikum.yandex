const enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT'
}

type HttpOptions = {
    method: HttpMethods;
    headers: Record<string, string>;
    data: object;
    timeout: number;
}

type HttpRequest = (url: string, options: Partial<HttpOptions>) => Promise<XMLHttpRequest>;

export class HTTP {
    get = this._createMethod(HttpMethods.GET);

    put = this._createMethod(HttpMethods.PUT);

    post = this._createMethod(HttpMethods.POST);

    delete = this._createMethod(HttpMethods.DELETE);

    private _createMethod(method: HttpMethods): HttpRequest {
        return (url: string, options = {}) => this._request(url, { ...options, method });
    }

    private _request(url: string, options: Partial<HttpOptions> = {}): Promise<XMLHttpRequest> {
        const { method = HttpMethods.GET, headers = {}, data = {}, timeout = 5000 } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (!method) {
                reject('No method');
                return;
            }

            if (method === HttpMethods.GET) {
                xhr.open(method, url + this._queryStringify(data));
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

        const query = [];
        for (const [key, value] of Object.entries(data)) {
            query.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
        return query.length ? `?${query.join('&')}` : '';
    }
}
