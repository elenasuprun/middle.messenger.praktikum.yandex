import { CheckValidity } from './checkValidity.ts';

export const ToggleClass = (
    element: HTMLInputElement, className = 'message__error'
): void => {
    element.classList.toggle(className, !CheckValidity(element));
};
