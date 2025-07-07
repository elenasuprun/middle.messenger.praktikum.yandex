import { Block } from '../../utils/classes/block.ts';
import { Avatar } from '../Avatar/avatar.ts';
import { Input } from '../Input/input.ts';
import { Button } from '../Button/button.ts';
import { OnSubmit } from '../../utils/functions/onSubmit.ts';

export class ChangePasswordForm extends Block {
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
                type: 'submit'
            }),
            events: {
                submit: OnSubmit
            }
        });
    }

    override render(): string {
        return `<form class="profile__info--container">
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
                </form>`;
    }
}
