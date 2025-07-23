import { Block, BlockProps } from '../../utils/classes/block.ts';
import { ChangeInfoForm } from '../../components/ChangeInfoForm/changeInfoForm.ts';
import { ButtonBack } from '../../components/ButtonBack/buttonBack.ts';
import { ProfileController } from '../profile/profile.controller.ts';
import { connect } from '../../utils/functions/connect.ts';
import { mapUserFromState } from '../../utils/functions/mapUserFromState.ts';

class ChangeInfoPage extends Block {
    private _profileController = new ProfileController();

    constructor() {
        super({
            ChangeInfoForm: new ChangeInfoForm(),
            ButtonBack: new ButtonBack()
        });
        this._profileController.getUserInfo();
    }

    override componentDidUpdate(newProps: BlockProps) {
        (this.children.ChangeInfoForm as Block).setProps({ ...mapUserFromState(newProps) });
    }

    override render(): string {
        return `<div class="profile__wrapper">
                    {{{ ButtonBack }}}
                    {{{ ChangeInfoForm }}}
                </div>`;
    }
}

export default connect(ChangeInfoPage, mapUserFromState);
