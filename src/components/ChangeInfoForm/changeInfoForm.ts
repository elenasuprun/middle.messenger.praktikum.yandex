import { Block, BlockProps } from '../../utils/classes/block.ts';
import { Avatar } from '../Avatar/avatar.ts';
import profileList from '../../utils/constants/profileList.ts';
import { InputInfo } from '../InputInfo/inputInfo.ts';
import { Button } from '../Button/button.ts';
import { User } from '../../utils/models/user.model.ts';

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
                submit: (e: Event) => {
                    e.preventDefault();
                }
            }
        });
    }

    override componentDidUpdate(newProps: BlockProps) {
        if (!newProps.user) {
            return;
        }

        this.lists.InputProfileList
            .forEach((item: any) => {
                const input = item.children.Input;
                input.setProps({ value: (newProps.user as User)[input.props.name as keyof User] });
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
