import type { Handle } from '@sveltejs/kit';
import { parse } from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
    // Пример получения токена из cookies (вы можете использовать любой другой способ)
    const cookies = parse(event.request.headers.get('cookie') || '');
    const authToken = cookies.authToken || '';

    let user = null;

    // Проверка токена и установка user
    if (authToken) {
        // Имитация получения пользователя из токена (замените на вашу логику)
        user = { id: 'user-id', name: 'User Name' }; // Получите данные пользователя по токену
    }

    event.locals.user = user;

    return resolve(event);
};
