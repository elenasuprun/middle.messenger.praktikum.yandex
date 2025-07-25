import { ChangePasswordApi } from './api/changePassword.api.ts';
import { ChangePassword } from '../../utils/models/changePassword.model.ts';

export class ChangePasswordController {
    private _changePasswordApi = new ChangePasswordApi();

    public changePassword(data: ChangePassword): void {
        this._changePasswordApi.update(JSON.stringify(data));
    }
}
