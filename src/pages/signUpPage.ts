import { Block } from '../utils/classes/block.ts';
import { OnSubmit } from '../utils/functions/onSubmit.ts';
import { SignUpForm } from '../components/SignUpForm/signUpForm.ts';

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
