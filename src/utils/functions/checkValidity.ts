import { RegExp } from '../constants/regexp.ts';

export const CheckValidity = (element: HTMLInputElement): boolean => {
    if (element.name in RegExp) {
        return RegExp[element.name].test(element.value);
    }
    return true;
};
