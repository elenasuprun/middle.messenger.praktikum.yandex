export const RegExp: Record<string, RegExp> = {
    first_name: /^[A-ZА-ЯЁ]([a-zа-яё-]*)/,
    second_name: /^[A-ZА-ЯЁ]([a-zа-яё-]*)/,
    login: /(?=.*[A-Za-z])[A-Za-z0-9_-]{3,20}/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-ZА-ЯЁ])(?=.*\d)[\wА-Яа-яЁё]{8,40}$/,
    phone: /^\+?\d{10,15}$/,
    message: /.+/
} as const;
