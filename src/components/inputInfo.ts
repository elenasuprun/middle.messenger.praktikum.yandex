import { Block } from '../general/block.ts';
import { Input, TInput } from './input.ts';

export class InputInfo extends Block {
    constructor(props: Partial<TInput>) {
        super({
            Input: new Input(props)
        });
    }

    override render(): string {
        return `<div class="profile__list--item">
                    {{{ Input }}}
                </div>`;
    }
}
