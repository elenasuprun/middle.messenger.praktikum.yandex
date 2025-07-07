import { ToggleClass } from './toggleClass.ts';

export const OnBlur = (e: FocusEvent) => {
    ToggleClass(e.target as HTMLInputElement);
};


