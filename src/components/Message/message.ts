import { Block } from '../../utils/classes/block.ts';
import { TMessage } from './types.ts';

export class Message extends Block {
    constructor(props: TMessage) {
        super({
            className: props.className,
            text: props.text,
            time: props.time,
        });
    }

    override render(): string {
        return `<div class="{{className}}">
                    {{{ text }}}
                    <span class="chat__space__main--time">{{ time }}</span>
                </div>`;
    }
}
