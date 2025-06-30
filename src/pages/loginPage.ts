import { Block } from '../utils/classes/block.ts';
import { OnSubmit } from '../utils/functions/onSubmit.ts';
import { LoginForm } from '../components/LoginForm/loginForm.ts';

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
