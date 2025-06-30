import { TLink } from '../../components/Link/types.ts';

export const navigationList: Partial<TLink>[] = [
    {
        text: 'Страница 404',
        page: '404'
    },
    {
        text: 'Страница 5xx-ошибок',
        page: '500'
    },
    {
        text: 'Страница авторизации',
        page: 'login'
    },
    {
        text: 'Страница регистрации',
        page: 'sign-up'
    },
    {
        text: 'Страница со списком чатов',
        page: 'chat'
    },
    {
        text: 'Страница изменения пароля',
        page: 'change-password'
    },
    {
        text: 'Страница изменения профиля',
        page: 'change-info'
    },
    {
        text: 'Страница профиля',
        page: 'profile'
    }
];
