import { Block } from '../../utils/classes/block.ts';
import { TAvatar } from './types.ts';

export class Avatar extends Block {
    constructor(props: TAvatar) {
        super(props);
    }

    override render(): string {
        return `<div class="avatar--container">
                    <div class="avatar">
                        <div class="avatar--overlay">
                            <span class="avatar--overlay__text">Поменять<br> аватар</span>
                        </div>
                        <div class="avatar--icon wrapper__center"></div>
                    </div>
                    {{#if username}}
                        <p class="avatar--username">{{username}}</p>
                    {{/if}}
                </div>`;
    }
}
