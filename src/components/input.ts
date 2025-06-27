import { Block } from '../general/block.ts';
import { TBase } from '../general/baseType.ts';
import { OnBlur } from '../functions/onBlur.ts';

export type TInput = TBase & {
    labelClassName: string;
    label: string;
    inputClassName: string;
    type: string;
    name: string;
    placeholder: string;
    message: string;
}

export class Input extends Block {
    constructor(props: Partial<TInput>) {
        super(props);
    }

    override addEvents() {
        super.addEvents();

        const inputChild = this.element.querySelector('input');
        if (inputChild) {
            inputChild.addEventListener('blur', OnBlur);
        }
    }

    override removeEvents() {
        super.removeEvents();

        const inputChild = this.element.querySelector('input');
        if (inputChild) {
            inputChild.removeEventListener('blur', OnBlur);
        }
    }

    override render(): string {
        return `<label class="{{labelClassName}}">
                    {{label}}
                    <input
                        class="{{inputClassName}}"
                        type="{{type}}"
                        name="{{name}}"
                        {{#if placeholder}}
                            placeholder="{{placeholder}}"
                        {{/if}}
                    >
                    <span class="message">{{message}}</span>
                </label>`;
    }
}
