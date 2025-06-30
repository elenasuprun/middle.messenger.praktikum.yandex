import { Block } from '../utils/classes/block.ts';
import { ChangePasswordForm } from '../components/ChangePasswordForm/changePasswordForm.ts';

export class ChangePasswordPage extends Block {
    constructor() {
        super({
            ChangePasswordForm: new ChangePasswordForm()
        });
    }

    override render(): string {
        return `<div class="profile__wrapper">
                    <aside class="profile__navigate">
                        <div class="profile__navigate--icon wrapper__center"></div>
                    </aside>
                    {{{ ChangePasswordForm }}}
                </div>`;
    }
}
