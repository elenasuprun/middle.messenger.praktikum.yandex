import { ToggleClass } from './toggleClass.ts';

export const OnSubmit = (e: Event) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    form.querySelectorAll('input')?.forEach(input => ToggleClass(input));
    console.log(Object.fromEntries(formData.entries()));
}
