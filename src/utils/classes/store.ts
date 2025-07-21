import { EventBus } from './eventBus.ts';
import { StoreEvents } from '../enums/storeEvents.ts';
import { set } from '../functions/set.ts';
import { Indexed } from '../types/indexed.ts';

class Store extends EventBus {
    private _state: Indexed = {};

    public getState(): Indexed {
        return this._state;
    }

    public set(path: string, value: unknown) {
        set(this._state, path, value);
        this.emit(StoreEvents.UPDATED);
    }
}

export default new Store();
