import { Block } from '../general/block.ts';
import { OnSubmit } from '../functions/onSubmit.ts';
import { LoginForm } from '../components/loginForm.ts';

export class LoginPage extends Block {
    constructor() {
        super({
            LoginForm: new LoginForm({
                title: 'Вход',
                events: {
                    submit: OnSubmit
                }
            })
        });
    }

    override render(): string {
        return `<div class="app wrapper__center">
                    {{{ LoginForm }}}
                </div>`;
    }
}
