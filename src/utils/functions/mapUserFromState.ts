import { Indexed } from '../types/indexed.ts';

export const mapUserFromState = (
    state: Indexed
) => ({
    user: state.user
});
