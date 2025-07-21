import { EventBus } from './eventBus.ts';
import { StoreEvents } from '../enums/storeEvents.ts';
import { set } from '../functions/set.ts';

class Store extends EventBus {
    private _state: object = {};

    public getState(): object {
        return this._state;
    }

    public set(path: string, value: unknown) {
        set(this._state, path, value);
        this.emit(StoreEvents.UPDATED);
    }
}

export default new Store();
