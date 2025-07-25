import { Block } from '../../utils/classes/block.ts';
import ChangePasswordForm from '../../components/ChangePasswordForm/changePasswordForm.ts';
import { ButtonBack } from '../../components/ButtonBack/buttonBack.ts';
import { connect } from '../../utils/functions/connect.ts';
import { mapUserFromState } from '../../utils/functions/mapUserFromState.ts';
import { ProfileController } from '../profile/profile.controller.ts';

class ChangePasswordPage extends Block {
    private _profileController = new ProfileController();

    constructor() {
        super({
            ChangePasswordForm: new ChangePasswordForm({}),
            ButtonBack: new ButtonBack()
        });
        this._profileController.getUserInfo();
    }

    override render(): string {
        return `<div class="profile__wrapper">
                    {{{ ButtonBack }}}
                    {{{ ChangePasswordForm }}}
                </div>`;
    }
}

export default connect(ChangePasswordPage, mapUserFromState);
