import { BaseApi } from '../../../utils/classes/base-api.ts';
import { HTTPTransport } from '../../../utils/classes/http.ts';

export class ChangePasswordApi extends BaseApi {
    private _http = new HTTPTransport('/user/password');

    update(data: string): void {
        this._http.put('', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data
        });
    }
}
