import { Block } from '../general/block.ts';
import { Input } from '../components/input.ts';
import { Button } from '../components/button.ts';
import { Link } from '../components/link.ts';

export class LoginPage extends Block {
    constructor() {
        super({
            title: 'Вход',
            InputLogin: new Input({
                labelClassName: 'auth__form__textbox',
                label: 'Логин',
                name: 'login',
                type: 'text'
            }),
            InputPassword: new Input({
                labelClassName: 'auth__form__textbox',
                label: 'Пароль',
                name: 'password',
                type: 'password'
            }),
            ButtonSubmit: new Button({
                className: 'form__submit',
                text: 'Авторизоваться',
                type: 'submit',
                events: {
                    click: (e: Event) => e.preventDefault()
                }
            }),
            Link: new Link({
                className: 'form__link',
                text: 'Нет аккаунта?'
            }),
        });
    }

    override render(): string {
        return this.compile(
            `<div class="app wrapper__center">
                <form class="auth__form wrapper__center">
                    <div class="auth__form__block">
                        <p class="auth__form__title">{{title}}</p>
                        {{{ InputLogin }}}
                        {{{ InputPassword }}}
                    </div>
                    <div class="auth__form__block">
                        {{{ ButtonSubmit }}}
                        {{{ Link }}}
                    </div>
                </form>
            </div>`
        );
    }
}
