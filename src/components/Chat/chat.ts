import { Block } from '../../utils/classes/block.ts';
import { TChat } from './types.ts';

export class Chat extends Block {
    constructor(props: Partial<TChat>) {
        super(props);
    }

    override render(): string {
        return `<div class="chat__list--item">
                    <div class="chat__list--item__avatar--wrapper">
                        <div class="chat__list--item__avatar"></div>
                    </div>
                    <div class="chat__list--item__content">
                        <div class="chat__list--item__title--wrapper">
                            <span class="chat__list--item__title">{{ title }}</span>
                            {{#if date}}
                                <span class="chat__list--item__date">{{ date }}</span>
                            {{/if}}
                        </div>
                        {{#if message}}
                            <p class="chat__list--item__message">{{ message }}</p>
                        {{/if}}
                    </div>
                </div>`;
    }
}
