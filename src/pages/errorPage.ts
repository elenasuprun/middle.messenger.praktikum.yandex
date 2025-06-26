import { Block } from '../general/block.ts';
import { Failure } from '../components/failure.ts';

export class ErrorPage extends Block {
    constructor() {
        super({
            Failure: new Failure({
                code: '500',
                message: 'Мы уже фиксим'
            })
        });
    }

    override render(): string {
        return `<div class="app wrapper__center">
                    <div class="wrapper__center">
                        {{{ Failure }}}
                    </div>
                </div>`;
    }
}
