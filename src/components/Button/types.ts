import { TBase } from '../../utils/types/baseType.ts';

export type TButton = TBase & {
    className: string;
    type: string;
    text: string;
    isDisabled: boolean;
}
