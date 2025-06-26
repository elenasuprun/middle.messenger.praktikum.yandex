import { Block } from '../general/block.ts';
import { Link } from './link.ts';
import { TBase } from '../general/baseType.ts';

type TFailure = TBase & {
    code: string;
    message: string;
}

export class Failure extends Block {
    constructor(props: TFailure) {
        super({
            code: props.code,
            message: props.message,
            Link: new Link({
                className: 'failure__link',
                url: '#',
                text: 'Назад к чатам'
            })
        });
    }

    override render(): string {
        return this.compile(
            `<div class="failure__container">
                <p class="failure__code">{{ code }}</p>
                <p class="failure__message">{{ message }}</p>
                {{{ Link }}}
            </div>`
        );
    }
}
