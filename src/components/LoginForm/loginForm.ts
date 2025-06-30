import { Block } from '../../utils/classes/block.ts';
import { Input } from '../Input/input.ts';
import { Button } from '../Button/button.ts';
import { Link } from '../Link/link.ts';
import { TLoginForm } from './types.ts';

export class LoginForm extends Block {
    constructor(props: Partial<TLoginForm>) {
        super({
            title: props.title,
            events: props.events,
            InputLogin: new Input({
                labelClassName: 'auth__form__textbox',
                label: 'Логин',
                name: 'login',
                type: 'text',
                message: 'Неверный логин'
            }),
            InputPassword: new Input({
                labelClassName: 'auth__form__textbox',
                label: 'Пароль',
                name: 'password',
                type: 'password',
                message: 'Неверный пароль'
            }),
            ButtonSubmit: new Button({
                className: 'form__submit',
                text: 'Авторизоваться',
                type: 'submit'
            }),
            Link: new Link({
                className: 'form__link',
                text: 'Нет аккаунта?'
            })
        });
    }

    override render(): string {
        return `<form class="auth__form wrapper__center">
                    <div class="auth__form__block">
                        <p class="auth__form__title">{{title}}</p>
                        {{{ InputLogin }}}
                        {{{ InputPassword }}}
                    </div>
                    <div class="auth__form__block">
                        {{{ ButtonSubmit }}}
                        {{{ Link }}}
                    </div>
                </form>`;
    }
}
