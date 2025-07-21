import { LoginApi } from '../../api/login.api.ts';
import { Router } from '../../utils/classes/router.ts';
import { Routes } from '../../utils/enums/routes.ts';
import { AuthApi } from '../../api/auth.api.ts';
import { default as Store} from '../../utils/classes/store.ts';

export class LoginController {
    private _loginApi = new LoginApi();
    private _authApi = new AuthApi();
    private _router = new Router('#app');

    public login(data: object): void {
        this._loginApi
            .create(data)
            .then((response: XMLHttpRequest) => {
                if (response.status === 200) {
                    this._authApi
                        .request()
                        .then(response => {
                            if (response.status === 200) {
                                Store.set('user', JSON.parse(response.response));
                                this._router.go(Routes.Chat);
                            }
                        });
                }
            });
    }
}
