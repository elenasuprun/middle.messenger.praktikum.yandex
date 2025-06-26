import { Block } from '../general/block.ts';
import { TBase } from '../general/baseType.ts';

type TButton = TBase & {
    className: string;
    type: string;
    text: string;
    isDisabled: boolean;
}

export class Button extends Block {
    constructor(props: Partial<TButton>) {
        super(props);
    }

    render(): any {
        return `<button class="{{className}}"
                        type="{{type}}"
                        {{#if isDisabled}}
                            disabled
                        {{/if}}>
                    {{text}}
                </button>`;
    }
}
