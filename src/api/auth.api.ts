import { BaseApi } from '../utils/classes/base-api.ts';
import { HTTPTransport } from '../utils/classes/http.ts';

export class AuthApi extends BaseApi {
    private _http = new HTTPTransport('/auth');

    override create(): Promise<XMLHttpRequest> {
        return this._http.post('/logout');
    }

    override request(): Promise<XMLHttpRequest> {
        return this._http.get('/user');
    }
}
