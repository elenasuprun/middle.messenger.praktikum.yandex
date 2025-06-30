import { Block } from '../../utils/classes/block.ts';
import { Link } from '../Link/link.ts';
import { TFailure } from './types.ts';

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
        return `<div class="failure__container">
                    <p class="failure__code">{{ code }}</p>
                    <p class="failure__message">{{ message }}</p>
                    {{{ Link }}}
                </div>`;
    }
}
