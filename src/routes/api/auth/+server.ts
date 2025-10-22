import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function POST({ request, cookies }) {
    const { password } = await request.json();

    const correctPassword = env.AUTH_PASSWORD

    if (password === correctPassword) {
        cookies.set('trader-joedle-auth', 'authenticated', {
            path: '/',
            maxAge: 60 * 60 * 24,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        });

        return json({ success: true });
    } else {
        return json({ success: false }, { status: 401 });
    }
}