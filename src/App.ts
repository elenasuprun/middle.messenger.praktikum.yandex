import { ErrorPage } from './pages/errorPage.ts';
import { NotFoundPage } from './pages/notFoundPage.ts';
import { HeaderPage } from './pages/header.ts';
import { LoginPage } from './pages/loginPage.ts';
import { SignUpPage } from './pages/signUpPage.ts';
import { ChatPage } from './pages/chatPage.ts';
import { ChangePasswordPage } from './pages/changePasswordPage.ts';
import { ChangeInfoPage } from './pages/changeInfoPage.ts';
import { ProfilePage } from './pages/profilePage.ts';
import { Nullable } from './utils/types/nullable.ts';
import { Routes } from './utils/enums/routes.ts';

export class App {
    appElement: Nullable<HTMLElement>;
    headerElement: Nullable<HTMLElement>;
    state: string = 'login';

    constructor() {
        this.appElement = document.getElementById('app');
        this.headerElement = document.getElementById('header');
        if (this.headerElement) {
            this.headerElement.appendChild(new HeaderPage().getContent());
        }

        this.addListeners();
    }

    render(): void {
        if (!this.appElement) {
            return;
        }
        this.appElement.innerHTML = '';
        switch(this.state) {
            case Routes.Error404:
                this.appElement.appendChild(new NotFoundPage().getContent());
                break;
            case Routes.Error500:
                this.appElement.appendChild(new ErrorPage().getContent());
                break;
            case Routes.Login:
                this.appElement.appendChild(new LoginPage().getContent());
                break;
            case Routes.SignUp:
                this.appElement.appendChild(new SignUpPage().getContent());
                break;
            case Routes.Profile:
                this.appElement.appendChild(new ProfilePage({
                    username: 'Иван'
                }).getContent());
                break;
            case Routes.ChangePassword:
                this.appElement.appendChild(new ChangePasswordPage().getContent());
                break;
            case Routes.ChangeInfo:
                this.appElement.appendChild(new ChangeInfoPage().getContent());
                break;
            case Routes.Chat:
                this.appElement.appendChild(new ChatPage().getContent());
                break;
        }
    }

    changePage(page: string | undefined): void {
        if (!page) {
            return;
        }
        this.state = page;
        this.render();
    }

    addListeners(): void {
        const nav = document.querySelector('.nav__list');

        if (!nav) {
            throw new Error('Navigation is not defined');
        }

        nav.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A') {
                e.preventDefault();
                this.changePage(target.dataset.page);
            }
        });
    }
}
