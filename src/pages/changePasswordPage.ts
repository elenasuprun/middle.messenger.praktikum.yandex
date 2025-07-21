import { Block } from '../utils/classes/block.ts';
import { ChangePasswordForm } from '../components/ChangePasswordForm/changePasswordForm.ts';
import { ButtonBack } from '../components/ButtonBack/buttonBack.ts';

export class ChangePasswordPage extends Block {
    constructor() {
        super({
            ChangePasswordForm: new ChangePasswordForm(),
            ButtonBack: new ButtonBack()
        });
    }

    override render(): string {
        return `<div class="profile__wrapper">
                    {{{ ButtonBack }}}
                    {{{ ChangePasswordForm }}}
                </div>`;
    }
}
