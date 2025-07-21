import { Block } from '../utils/classes/block.ts';
import { ChangeInfoForm } from '../components/ChangeInfoForm/changeInfoForm.ts';
import { ButtonBack } from '../components/ButtonBack/buttonBack.ts';

export class ChangeInfoPage extends Block {
    constructor() {
        super({
            ChangeInfoForm: new ChangeInfoForm(),
            ButtonBack: new ButtonBack()
        });
    }

    override render(): string {
        return  `<div class="profile__wrapper">
                    {{{ ButtonBack }}}
                    {{{ ChangeInfoForm }}}
                </div>`;
    }
}
