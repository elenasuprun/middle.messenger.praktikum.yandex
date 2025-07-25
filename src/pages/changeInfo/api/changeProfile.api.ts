import { HTTPTransport } from '../../../utils/classes/http.ts';
import { BaseApi } from '../../../utils/classes/base-api.ts';
import Store from '../../../utils/classes/store.ts';

export class ChangeProfileApi extends BaseApi {
    private _http = new HTTPTransport('/user/profile');

    update(data: string): void {
        this._http.put('', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data
        })
            .then(response => JSON.parse(response.response))
            .then(response => Store.set('user', response));
    }
}
