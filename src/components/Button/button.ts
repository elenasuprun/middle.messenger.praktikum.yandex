import { Block } from '../../utils/classes/block.ts';
import { TButton } from './types.ts';

export class Button extends Block {
    constructor(props: Partial<TButton>) {
        super(props);
    }

    render(): string {
        return `<button class="{{className}}"
                        type="{{type}}"
                        {{#if isDisabled}}
                            disabled
                        {{/if}}>
                    {{text}}
                </button>`;
    }
}
