import { Block } from '../../utils/classes/block.ts';
import { TLink } from './types.ts';

export class Link extends Block {
    constructor(props: Partial<TLink>) {
        super(props);
    }

    override render(): string {
        return `<a class="{{className}}" href="{{url}}" data-page="{{page}}">
                    {{text}}
                </a>`;
    }

}
