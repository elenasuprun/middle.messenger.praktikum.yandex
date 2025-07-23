import { BaseApi } from '../../../utils/classes/base-api.ts';
import { HTTPTransport } from '../../../utils/classes/http.ts';
import { ChangePassword } from '../../../utils/models/changePassword.model.ts';

export class ChangeUserPasswordApi extends BaseApi {
    private _http = new HTTPTransport('/user/password');

    update(data: ChangePassword): void {
        this._http.put('', { data });
    }
}
