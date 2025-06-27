import { Block } from '../general/block.ts';
import { TBase } from '../general/baseType.ts';
import { Input } from './input.ts';
import { Button } from './button.ts';
import { Link } from './link.ts';

type TSignUpForm = TBase & {
    title: string;
}

export class SignUpForm extends Block {
    constructor(props: Partial<TSignUpForm>) {
        super({
            events: props.events,
            title: props.title,
            InputEmail: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'email',
                label: 'Почта',
                message: 'Неверный email'
            }),
            InputLogin: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'login',
                label: 'Логин',
                message: 'Неверный логин'
            }),
            InputFirstName: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'first_name',
                label: 'Имя',
                message: 'Неверное имя'
            }),
            InputSecondName: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'second_name',
                label: 'Фамилия',
                message: 'Неверная фамилия'
            }),
            InputPhone: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'text',
                name: 'phone',
                label: 'Телефон',
                message: 'Неверный номер телефона'
            }),
            InputPassword: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'password',
                name: 'password',
                label: 'Пароль',
                message: 'Неверный пароль'
            }),
            InputConfirmPassword: new Input({
                labelClassName: 'auth__form__textbox',
                type: 'password',
                label: 'Пароль (ещё раз)',
                message: 'Пароли не совпадают'
            }),
            ButtonSubmit: new Button({
                className: 'form__submit',
                text: 'Зарегистрироваться'
            }),
            Link: new Link({
                className: 'form__link',
                text: 'Войти'
            })
        });
    }

    override render(): string {
        return `<form class="auth__form wrapper__center">
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
                </form>`;
    }
}
