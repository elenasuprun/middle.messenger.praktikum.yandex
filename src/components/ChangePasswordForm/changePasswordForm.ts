import { Block } from '../../utils/classes/block.ts';
import Avatar from '../Avatar/avatar.ts';
import { Input } from '../Input/input.ts';
import { Button } from '../Button/button.ts';
import { connect } from '../../utils/functions/connect.ts';
import { mapUserFromState } from '../../utils/functions/mapUserFromState.ts';
import { ChangePasswordController } from '../../pages/changePassword/changePasswordController.ts';
import { getDataFromForm, validateForm } from '../../utils/functions/onSubmit.ts';
import { ChangePassword } from '../../utils/models/changePassword.model.ts';

class ChangePasswordForm extends Block {
    private _changePasswordController = new ChangePasswordController();

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
                submit: (e: Event) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;

                    const data = getDataFromForm(form) as unknown as ChangePassword;
                    const validity = validateForm(form);

                    if (validity) {
                        try {
                            this._changePasswordController.changePassword(data);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
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

export default connect(ChangePasswordForm, mapUserFromState);
