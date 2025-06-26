import { ErrorPage } from './pages/errorPage.ts';
import { NotFoundPage } from './pages/notFoundPage.ts';
import { HeaderPage } from './pages/header.ts';
import { LoginPage } from './pages/loginPage.ts';
import { SignUpPage } from './pages/signUpPage.ts';
import { ChatPage } from './pages/chatPage.ts';
import { ChangePasswordPage } from './pages/changePasswordPage.ts';
import { ChangeInfoPage } from './pages/changeInfoPage.ts';
import { ProfilePage } from './pages/profilePage.ts';

export class App {
    appElement: HTMLElement | null;
    headerElement: HTMLElement | null;
    state: string = 'chat';

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
            case '404':
                this.appElement.appendChild(new NotFoundPage().getContent());
                break;
            case '500':
                this.appElement.appendChild(new ErrorPage().getContent());
                break;
            case 'login':
                this.appElement.appendChild(new LoginPage().getContent());
                break;
            case 'sign-up':
                this.appElement.appendChild(new SignUpPage().getContent());
                break;
            case 'profile':
                this.appElement.appendChild(new ProfilePage({
                    username: 'Иван'
                }).getContent());
                break;
            case 'change-password':
                this.appElement.appendChild(new ChangePasswordPage().getContent());
                break;
            case 'change-info':
                this.appElement.appendChild(new ChangeInfoPage().getContent());
                break;
            case 'chat':
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
