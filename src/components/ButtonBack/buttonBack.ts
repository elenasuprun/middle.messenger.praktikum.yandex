import { Block } from '../../utils/classes/block.ts';
import { Button } from '../Button/button.ts';
import { Router } from '../../utils/classes/router.ts';

export class ButtonBack extends Block {
    private _router = new Router('#app');

    constructor() {
        super({
            Back: new Button({
                className: 'profile__navigate--icon wrapper__center',
                events: {
                    click: () => this._router.back()
                }
            })
        });
    }

    override render(): string {
        return `<aside class="profile__navigate">
                    {{{ Back }}}
                </aside>`;
    }
}
