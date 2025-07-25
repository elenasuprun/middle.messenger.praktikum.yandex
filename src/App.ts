import { ErrorPage } from './pages/errorPage.ts';
import { NotFoundPage } from './pages/notFoundPage.ts';
import { LoginPage } from './pages/login/loginPage.ts';
import { SignUpPage } from './pages/signUp/signUpPage.ts';
import { ChatPage } from './pages/chat/chatPage.ts';
import { Routes } from './utils/enums/routes.ts';
import { Router } from './utils/classes/router.ts';
import ChangePasswordPage from './pages/changePassword/changePasswordPage.ts';
import ChangeInfoPage from './pages/changeInfo/changeInfoPage.ts';
import ProfilePage from './pages/profile/profilePage.ts';
import { connect } from './utils/functions/connect.ts';

export class App {
    router: Router;

    constructor() {
        this._initRoutes();
    }

    private _initRoutes(): void {
        this.router = new Router('#app');

        this.router
            .use(Routes.Error404, NotFoundPage)
            .use(Routes.Error500, ErrorPage)
            .use(Routes.Login, connect(LoginPage, () => ({})))
            .use(Routes.SignUp, SignUpPage)
            .use(Routes.Profile, ProfilePage)
            .use(Routes.ChangeInfo, ChangeInfoPage)
            .use(Routes.ChangePassword, ChangePasswordPage)
            .use(Routes.Chat, ChatPage)
            .start();
    }
}
