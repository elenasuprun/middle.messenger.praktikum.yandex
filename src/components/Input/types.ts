import { TBase } from '../../utils/types/baseType.ts';

export type TInput = TBase & {
    labelClassName: string;
    label: string;
    inputClassName: string;
    type: string;
    name: string;
    placeholder: string;
    message: string;
}
