import { Block } from '../general/block.ts';
import { Failure } from '../components/failure.ts';

export class NotFoundPage extends Block {
    constructor() {
        super({
            Failure: new Failure({
                code: '404',
                message: 'Не туда попали'
            })
        });
    }

    override render(): string {
        return this.compile(`
            <div class="app wrapper__center">
                <div class="wrapper__center">
                    {{{ Failure }}}
                </div>
            </div>`
        );
    }
}
