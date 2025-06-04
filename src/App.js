import Handlebars from "handlebars";
import * as Pages from "./pages";
import Link from "./components/link.js";
import Chat from "./components/chat.js";
import Input from "./components/input.js";
import Avatar from "./components/avatar.js";
import Button from "./components/button.js";
import Failure from "./components/failure.js";
import profileList from "./constants/profileList.js";

Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Chat', Chat);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Avatar', Avatar);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Failure', Failure);

export class App {
    appElement; headerElement;
    state = {
        currentPage: 'chat'
    };

    constructor() {
        this.appElement = document.getElementById('app');
        this.headerElement = document.getElementById('header');
        this.headerElement.innerHTML = Handlebars.compile(Pages.HeaderPage)();

        this.addListeners();
    }

    render() {
        let template, context;
        switch (this.state.currentPage) {
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
                    username: "Иван"
                };
                break;
            case 'change-password':
                template = Handlebars.compile(Pages.ChangePasswordPage);
                break;
            case 'change-info':
                template = Handlebars.compile(Pages.ChangeInfoPage);
                context = {profileList};
                break;
            case 'chat':
                template = Handlebars.compile(Pages.ChatPage);
                break;
        }
        this.appElement.innerHTML = template(context);
    }

    changePage(page) {
        this.state.currentPage = page;
        this.render();
    }

    addListeners() {
        const navLinks = document.querySelectorAll('.nav__list--item');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.changePage(e.target.dataset.page);
            })
        })
    }
}