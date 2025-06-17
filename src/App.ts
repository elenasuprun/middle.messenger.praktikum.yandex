import * as Handlebars from 'handlebars';
import { default as Pages } from './pages';
import Link from './components/link.ts';
import Chat from './components/chat.ts';
import Input from './components/input.ts';
import Avatar from './components/avatar.ts';
import Button from './components/button.ts';
import Failure from './components/failure.ts';
import profileList from './constants/profileList.ts';

Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Chat', Chat);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Avatar', Avatar);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Failure', Failure);

export class App {
    appElement: HTMLElement | null;
    headerElement: HTMLElement | null;
    state: string = 'chat';

    constructor() {
        this.appElement = document.getElementById('app');
        this.headerElement = document.getElementById('header');
        if (this.headerElement) {
            this.headerElement.innerHTML = Handlebars.compile(Pages.HeaderPage)(null);
        }

        this.addListeners();
    }

    render(): void {
        let template: HandlebarsTemplateDelegate = Handlebars.compile(Pages.NotFoundPage);
        let context: Record<string, unknown> = {};
        switch(this.state) {
            case '404':
                template = Handlebars.compile(Pages.NotFoundPage);
                break;
            case '500':
                template = Handlebars.compile(Pages.ErrorPage);
                break;
            case 'login':
                template = Handlebars.compile(Pages.LoginPage);
                break;
            case 'sign-up':
                template = Handlebars.compile(Pages.SignUpPage);
                break;
            case 'profile':
                template = Handlebars.compile(Pages.ProfilePage);
                context = {
                    profileList,
                    username: 'Иван'
                };
                break;
            case 'change-password':
                template = Handlebars.compile(Pages.ChangePasswordPage);
                break;
            case 'change-info':
                template = Handlebars.compile(Pages.ChangeInfoPage);
                context = { profileList };
                break;
            case 'chat':
                template = Handlebars.compile(Pages.ChatPage);
                break;
        }
        if (this.appElement) {
            this.appElement.innerHTML = template(context);
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
