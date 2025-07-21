import { BlockProps } from '../classes/block.ts';
import store from '../classes/store.ts';
import { StoreEvents } from '../enums/storeEvents.ts';
import { BlockClassType } from '../types/blockClassType.ts';

export const connect = (Component: BlockClassType) => {
    return class extends Component {
        constructor(args: BlockProps) {
            super({ ...args, ...store.getState() });

            store.on(StoreEvents.UPDATED, () => this.setProps({ ...store.getState() }));
        }
    };
};
