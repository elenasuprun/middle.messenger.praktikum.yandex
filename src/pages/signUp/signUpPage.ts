import { Block } from '../../utils/classes/block.ts';
import { SignUpForm } from '../../components/SignUpForm/signUpForm.ts';
import { SignUpController } from './signUp.controller.ts';

export class SignUpPage extends Block {
    private _signUpController = new SignUpController();

    constructor() {
        super({
            SignUpForm: new SignUpForm({
                title: 'Регистрация',
                events: {
                    submit: e => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const formData = new FormData(form);

                        this._signUpController
                            .signUp(Object.fromEntries(formData.entries()))
                            .then(console.log);
                    }
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
