import { BaseApi } from '../../../utils/classes/base-api.ts';
import { HTTPTransport } from '../../../utils/classes/http.ts';
import Store from '../../../utils/classes/store.ts';

export class ChangeUserAvatarApi extends BaseApi {
    private _http = new HTTPTransport('/user/profile/avatar');

    update(data: FormData): void {
        this._http.put('', { data })
            .then(response => JSON.parse(response.response))
            .then(response => Store.set('user', response));
    }
}
