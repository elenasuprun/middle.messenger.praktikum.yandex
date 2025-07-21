import { BlockProps } from '../classes/block.ts';
import store from '../classes/store.ts';
import { StoreEvents } from '../enums/storeEvents.ts';
import { BlockClassType } from '../types/blockClassType.ts';
import { Indexed } from '../types/indexed.ts';

export const connect = (
    Component: BlockClassType,
    mapStateToProps: (state: Indexed) => Indexed
) => {
    return class extends Component {
        constructor(props: BlockProps) {
            super({ ...props, ...mapStateToProps(store.getState()) });

            store.on(StoreEvents.UPDATED, () => this.setProps({ ...store.getState() }));
        }
    };
};
