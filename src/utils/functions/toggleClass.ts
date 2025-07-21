import { CheckValidity } from './checkValidity.ts';

export const ToggleClass = (
    element: HTMLInputElement, className = 'message__error'
): boolean => {
    const check = CheckValidity(element)
    element.classList.toggle(className, !check);
    return check;
};
