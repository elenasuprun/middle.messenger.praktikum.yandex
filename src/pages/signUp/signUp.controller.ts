import { SignUpApi } from './api/signup.api.ts';

export class SignUpController {
    private _signUpApi = new SignUpApi();

    public async signUp(data: object): Promise<unknown> {
        return this._signUpApi.create(data);
    }
}

