import { Block } from '../../utils/classes/block.ts';
import { Avatar } from '../Avatar/avatar.ts';
import profileList from '../../utils/constants/profileList.ts';
import { InputInfo } from '../InputInfo/inputInfo.ts';
import { Button } from '../Button/button.ts';
import { OnSubmit } from '../../utils/functions/onSubmit.ts';

export class ChangeInfoForm extends Block {
    constructor() {
        super({
            Avatar: new Avatar({}),
            InputProfileList: profileList.map(item => new InputInfo({
                labelClassName: 'profile__textbox profile__textbox__with--input',
                label: item.label,
                name: item.name,
                message: item.message,
                type: 'text'
            })),
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
                        {{{ InputProfileList }}}
                    </div>
                    {{{ ButtonSubmit }}}
                </form>`;
    }
}
