import { BaseApi } from '../utils/classes/base-api.ts';
import { HTTPTransport } from '../utils/classes/http.ts';

export class LoginApi extends BaseApi {
    private _http = new HTTPTransport('/auth');

    override create(data: object): Promise<XMLHttpRequest> {
        return this._http.post('/signin', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data
        })
    }
}
