import { Block } from '../general/block.ts';
import { Avatar } from '../components/avatar.ts';
import profileList from '../constants/profileList.ts';
import { Button } from '../components/button.ts';
import { InputInfo } from '../components/inputInfo.ts';

export class ChangeInfoPage extends Block {
    constructor() {
        super({
            Avatar: new Avatar({}),
            InputProfileList: profileList.map(item => new InputInfo({
                labelClassName: 'profile__textbox profile__textbox__with--input',
                label: item.label,
                name: item.name,
                type: 'text'
            })),
            ButtonSubmit: new Button({
                className: 'form__submit',
                text: 'Сохранить',
                type: 'submit'
            })
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
                        {{{ InputProfileList }}}
                    </div>
                    {{{ ButtonSubmit }}}
                </form>
            </div>`
        );
    }
}
