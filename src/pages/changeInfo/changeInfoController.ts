import { ChangeProfileApi } from './api/changeProfile.api.ts';
import { User } from '../../utils/models/user.model.ts';

export class ChangeInfoController {
    private _changeProfileApi = new ChangeProfileApi();

    public changeProfile(data: User): void {
        this._changeProfileApi.update(JSON.stringify(data));
    }
}
