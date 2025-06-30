import { TBase } from '../../utils/types/baseType.ts';

export type TChat = TBase & {
    title: string;
    date: string;
    message: string;
}
