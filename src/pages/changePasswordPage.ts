import { Block } from '../general/block.ts';
import { Button } from '../components/button.ts';
import { Avatar } from '../components/avatar.ts';
import { Input } from '../components/input.ts';

export class ChangePasswordPage extends Block {
    constructor() {
        super({
            Avatar: new Avatar({}),
            InputOldPassword: new Input({
                labelClassName: 'profile__textbox',
                name: 'oldPassword',
                type: 'password'
            }),
            InputNewPassword: new Input({
                labelClassName: 'profile__textbox',
                name: 'newPassword',
                type: 'password'
            }),
            InputConfirmPassword: new Input({
                labelClassName: 'profile__textbox',
                type: 'password'
            }),
            ButtonSubmit: new Button({
                className: 'form__submit',
                text: 'Сохранить',
                type: 'submit',
                events: {
                    click: (e: Event) => e.preventDefault()
                }
            }),
        });
    }

    override render(): void {
        return this.compile(
            `<div class="profile__wrapper">
                <aside class="profile__navigate">
                    <div class="profile__navigate--icon wrapper__center"></div>
                </aside>
                <form class="profile__info--container">
                    {{{ Avatar }}}
                    <div class="profile__list profile__list--info">
                        <div class="profile__list--item">
                            <span>Старый пароль</span>
                            {{{ InputOldPassword }}}
                        </div>
                        <div class="profile__list--item">
                            <span>Новый пароль</span>
                            {{{ InputNewPassword }}}
                        </div>
                        <div class="profile__list--item">
                            <span>Повторите новый пароль</span>
                            {{{ InputConfirmPassword }}}
                        </div>
                    </div>
                    {{{ ButtonSubmit }}}
                </form>
            </div>`
        );
    }
}
