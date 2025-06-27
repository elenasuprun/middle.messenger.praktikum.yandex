import { Block } from '../general/block.ts';
import { OnSubmit } from '../functions/onSubmit.ts';
import { SignUpForm } from '../components/signUpForm.ts';

export class SignUpPage extends Block {
    constructor() {
        super({
            SignUpForm: new SignUpForm({
                title: 'Регистрация',
                events: {
                    submit: OnSubmit
                }
            })
        });
    }

    override render(): string {
        return `<div class="app wrapper__center">
                    {{{ SignUpForm }}}
                </div>`;
    }
}
