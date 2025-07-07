import { Block } from '../../utils/classes/block.ts';
import { Input } from '../Input/input.ts';
import { TInput } from '../Input/types.ts';

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
