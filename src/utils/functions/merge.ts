import { Indexed } from '../types/indexed.ts';

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
    for (const prop in rhs) {
        if (!Object.prototype.hasOwnProperty.call(rhs, prop)) {
            continue;
        }

        try {
            if ((rhs[prop] as Indexed).constructor === Object) {
                rhs[prop] = merge(lhs[prop] as Indexed, rhs[prop] as Indexed);
            } else {
                lhs[prop] = rhs[prop];
            }
        } catch {
            lhs[prop] = rhs[prop];
        }
    }

    return lhs;
};
