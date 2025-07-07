import { TBase } from '../../utils/types/baseType.ts';

export type TFailure = TBase & {
    code: string;
    message: string;
}
