import type { RequestEvent } from '@sveltejs/kit';

interface User {
    id: string;
    name: string;
}

export async function getSession(event: RequestEvent): Promise<{ user: User | null }> {
    const sessionCookie = event.cookies.get('session_id');

    if (!sessionCookie) {
        return { user: null };
    }

    const user = await findUserBySessionId(sessionCookie);

    return { user };
}

async function findUserBySessionId(sessionId: string): Promise<User | null> {
    // Реализуйте логику поиска пользователя по session_id.
    // Пример возвращает фиктивного пользователя.
    const mockUser: User = { id: '1', name: 'John Doe' };

    return sessionId === 'valid-session-id' ? mockUser : null;
}