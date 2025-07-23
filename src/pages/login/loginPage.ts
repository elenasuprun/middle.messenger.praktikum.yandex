import { Block } from '../../utils/classes/block.ts';
import { LoginForm } from '../../components/LoginForm/loginForm.ts';
import { LoginController } from './login.controller.ts';
import { getDataFromForm, validateForm } from '../../utils/functions/onSubmit.ts';

export class LoginPage extends Block {
    private _loginController = new LoginController();

    constructor() {
        super({
            LoginForm: new LoginForm({
                title: 'Вход',
                events: {
                    submit: (e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;

                        const data = getDataFromForm(form);
                        const validity = validateForm(form);

                        if (validity) {
                            try {
                                this._loginController.login(data);
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
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
