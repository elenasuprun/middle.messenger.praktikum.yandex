import { ToggleClass } from './toggleClass.ts';

export const getDataFromForm = (form: HTMLFormElement) => {
    const formData = new FormData(form);

    return Object.fromEntries(formData.entries());
};

export const validateForm = (form: HTMLFormElement): boolean => {
    const fields = Array.from(form.querySelectorAll('input'));
    if (!fields.length) {
        return false;
    }
    return fields.map(input => ToggleClass(input)).every(check => check);
};
