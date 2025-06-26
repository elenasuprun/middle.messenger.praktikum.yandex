import { Block } from '../general/block.ts';
import { TBase } from '../general/baseType.ts';

export type TInput = TBase & {
    labelClassName: string;
    label: string;
    inputClassName: string;
    type: string;
    name: string;
    placeholder: string;
    isInvalid: boolean;
    message: string;
}

export class Input extends Block {
    constructor(props: Partial<TInput>) {
        super(props);
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
                    {{#if isInvalid}}
                        <span class="message message__error">{{message}}</span>
                    {{/if}}
                </label>`;
    }
}
