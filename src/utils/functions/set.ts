import { Indexed } from '../types/indexed.ts';
import { merge } from './merge.ts';

export const set = (
    object: Indexed | unknown,
    path: unknown,
    value: unknown
): Indexed | unknown => {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const rhs = path.split('.').reduceRight<Indexed>((acc, item) => ({ [item]: acc }), value as Indexed);

    return merge(object as Indexed, rhs);
};
