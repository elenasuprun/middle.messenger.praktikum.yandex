import { Block } from '../utils/classes/block.ts';
import { Failure } from '../components/Failure/failure.ts';

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
        return `<div class="app wrapper__center">
                    <div class="wrapper__center">
                        {{{ Failure }}}
                    </div>
                </div>`;
    }
}
