import { HTTPTransport } from '../../../utils/classes/http.ts';
import { BaseApi } from '../../../utils/classes/base-api.ts';
import { User } from '../../../utils/models/user.model.ts';
import Store from '../../../utils/classes/store.ts';

export class ChangeUserProfileApi extends BaseApi {
    private _http = new HTTPTransport('/user/profile');

    update(data: User): void {
        this._http.put('', { data })
            .then(response => JSON.parse(response.response))
            .then(response => Store.set('user', response));
    }
}
