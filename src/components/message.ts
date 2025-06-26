import { Block } from '../general/block.ts';
import { TBase } from '../general/baseType.ts';

type TMessage = TBase & {
    className: string;
    text: string;
    time: string;
}

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
