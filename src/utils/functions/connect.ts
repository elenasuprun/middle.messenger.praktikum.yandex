import { BlockProps } from '../classes/block.ts';
import store from '../classes/store.ts';
import { StoreEvents } from '../enums/storeEvents.ts';
import { BlockClassType } from '../types/blockClassType.ts';
import { Indexed } from '../types/indexed.ts';
import { isEqual } from './isEqual.ts';

export const connect = (
    Component: BlockClassType,
    mapStateToProps: (state: Indexed) => Indexed
) => {
    return class extends Component {
        constructor(props: BlockProps) {
            let state = mapStateToProps(store.getState());
            super({ ...props, ...state });

            store.on(StoreEvents.UPDATED, () => {
                const newState = mapStateToProps(store.getState());
                if (!isEqual(state, newState)) {
                    this.setProps({...newState});
                }

                state = newState;
            });
        }
    };
};
