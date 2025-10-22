import { redirect } from '@sveltejs/kit';

export async function load({ url, request }) {
    if (url.pathname === '/auth') {
        return {};
    }

    const authCookie = request.headers.get('cookie')?.includes('trader-joedle-auth=authenticated');

    if (!authCookie) {
        throw redirect(302, '/auth');
    }

    return {};
}