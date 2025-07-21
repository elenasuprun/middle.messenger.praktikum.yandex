import { Block } from './block.ts';
import { Nullable } from '../types/nullable.ts';
import { render } from '../functions/render.ts';
import { BlockClassType } from '../types/blockClassType.ts';

export class Route {
    private _pathname: string;
    private _blockClass: BlockClassType;
    private _block: Nullable<Block> = null;
    private _props: Record<string, unknown>;

    constructor(pathname: string, view: BlockClassType, props: Record<string, unknown> = {}) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string): boolean {
        return pathname === this._pathname;
    }

    render(): void {
        if (!this._block) {
            this._block = new this._blockClass();
            if (this._block && typeof this._props.rootQuery === 'string') {
                render(this._props.rootQuery, this._block);
            }
            return;
        }

        this._block.show();
    }
}
