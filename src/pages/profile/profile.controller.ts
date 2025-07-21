import { AuthApi } from '../../api/auth.api.ts';
import { Routes } from '../../utils/enums/routes.ts';
import { Router } from '../../utils/classes/router.ts';
import Store from '../../utils/classes/store.ts';

export class ProfileController {
    private _authApi = new AuthApi();
    private _router = new Router('#app');

    logout(): void {
        this._authApi
            .create()
            .then((response: XMLHttpRequest) => {
                if (response.status === 200) {
                    this._router.go(Routes.Login);
                }
            });
    }

    async getUserInfo(): Promise<void> {
        return this._authApi
            .request()
            .then(response => {
                if (response.status === 200) {
                    setTimeout(() => Store.set('user', JSON.parse(response.response)), 5000);
                }
            });
    }
}
