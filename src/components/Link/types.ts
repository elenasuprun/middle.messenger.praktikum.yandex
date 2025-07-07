import { TBase } from '../../utils/types/baseType.ts';

export type TLink = TBase & {
    className: string;
    url: string;
    page: string;
    text: string;
};
