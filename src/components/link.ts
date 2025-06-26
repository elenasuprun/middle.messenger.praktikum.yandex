import { Block } from '../general/block.ts';
import { TBase } from '../general/baseType.ts';

export type TLink = TBase & {
    className: string;
    url: string;
    page: string;
    text: string;
};

export class Link extends Block {
    constructor(props: Partial<TLink>) {
        super(props);
    }

    override render(): string {
        return this.compile(
            `<a class="{{className}}" href="{{url}}" data-page="{{page}}">
                {{text}}
            </a>`);
    }

}
