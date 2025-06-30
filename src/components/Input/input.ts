import { Block } from '../../utils/classes/block.ts';
import { OnBlur } from '../../utils/functions/onBlur.ts';
import { TInput } from './types.ts';

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
