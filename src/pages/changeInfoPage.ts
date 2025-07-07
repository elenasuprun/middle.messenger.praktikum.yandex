import { Block } from '../utils/classes/block.ts';
import { ChangeInfoForm } from '../components/ChangeInfoForm/changeInfoForm.ts';

export class ChangeInfoPage extends Block {
    constructor() {
        super({
            ChangeInfoForm: new ChangeInfoForm()
        });
    }

    override render(): string {
        return  `<div class="profile__wrapper">
                    <aside class="profile__navigate">
                        <div class="profile__navigate--icon wrapper__center"></div>
                    </aside>
                    {{{ ChangeInfoForm }}}
                </div>`;
    }
}
