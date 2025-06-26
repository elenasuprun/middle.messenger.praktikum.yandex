import { Block } from '../general/block.ts';
import { TBase } from '../general/baseType.ts';

type TAvatar = TBase & {
    username?: string;
}
export class Avatar extends Block {
    constructor(props: TAvatar) {
        super(props);
    }

    override render(): string {
        return `<div class="profile__avatar--container">
                    <div class="profile__avatar">
                        <div class="profile__avatar--overlay">
                            <span class="profile__avatar--overlay__text">Поменять<br> аватар</span>
                        </div>
                        <div class="profile__avatar--icon wrapper__center"></div>
                    </div>
                    {{#if username}}
                        <p class="profile__avatar--username">{{username}}</p>
                    {{/if}}
                </div>`;
    }
}
