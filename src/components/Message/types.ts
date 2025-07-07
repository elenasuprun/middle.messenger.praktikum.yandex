import { TBase } from '../../utils/types/baseType.ts';

export type TMessage = TBase & {
    className: string;
    text: string;
    time: string;
}
