import { ErrorPage } from './pages/errorPage.ts';
import { NotFoundPage } from './pages/notFoundPage.ts';
import { LoginPage } from './pages/login/loginPage.ts';
import { SignUpPage } from './pages/signUp/signUpPage.ts';
import { ChatPage } from './pages/chat/chatPage.ts';
import { ChangePasswordPage } from './pages/changePasswordPage.ts';
import { ChangeInfoPage } from './pages/changeInfoPage.ts';
import { Routes } from './utils/enums/routes.ts';
import { Router } from './utils/classes/router.ts';
import { ProfilePage } from './pages/profile/profilePage.ts';
import { connect } from './utils/functions/connect.ts';
import { Indexed } from './utils/types/indexed.ts';

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
            .use(Routes.Login, LoginPage)
            .use(Routes.SignUp, SignUpPage)
            .use(Routes.Profile, connect(ProfilePage, (state: Indexed) => ({
                user: state.user
            })))
            .use(Routes.ChangePassword, ChangePasswordPage)
            .use(Routes.ChangeInfo, ChangeInfoPage)
            .use(Routes.Chat, ChatPage)
            .start();
    }
}
