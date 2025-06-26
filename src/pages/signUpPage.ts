import { Block } from '../general/block.ts';
import { Link } from '../components/link.ts';
import { Input } from '../components/input.ts';
import { Button } from '../components/button.ts';

export class SignUpPage extends Block {
    constructor() {
        super({
            title: 'Регистрация',
            InputEmail: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'email',
                label: 'Почта'
            }),
            InputLogin: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'login',
                label: 'Логин'
            }),
            InputFirstName: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'first_name',
                label: 'Имя'
            }),
            InputSecondName: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'second_name',
                label: 'Фамилия'
            }),
            InputPhone: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'phone',
                label: 'Телефон'
            }),
            InputPassword: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'password',
                name: 'password',
                label: 'Пароль'
            }),
            InputConfirmPassword: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'password',
                label: 'Пароль (ещё раз)',
                message: 'Пароли не совпадают',
                isInvalid: true
            }),
            ButtonSubmit: new Button({
                className: 'form__submit',
                text: 'Зарегистрироваться',
                events: {
                    click: (e: Event) => e.preventDefault()
                }
            }),
            Link: new Link({
                className: 'form__link',
                text: 'Войти'
            }),
        });
    }

    override render(): string {
        return this.compile(`
            <div class="app wrapper__center">
                <form class="auth__form wrapper__center">
                    <div class="auth__form__block">
                        <p class="auth__form__title">{{title}}</p>
                        {{{ InputEmail }}}
                        {{{ InputLogin }}}
                        {{{ InputFirstName }}}
                        {{{ InputSecondName }}}
                        {{{ InputPhone }}}
                        {{{ InputPassword }}}
                        {{{ InputConfirmPassword }}}
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
