import type { Handle } from '@sveltejs/kit';
import { getSession } from './session';

export const handle: Handle = async ({ event, resolve }) => {
    const session = await getSession(event);
    event.locals.user = session.user;

    return await resolve(event);
};