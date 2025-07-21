import { BaseApi } from '../utils/classes/base-api.ts';
import { HTTPTransport } from '../utils/classes/http.ts';

export class SignUpApi extends BaseApi {
    private _http = new HTTPTransport('/auth');

    override create(data: object): Promise<XMLHttpRequest> {
        return this._http.post('/signup', { data })
    }
}
