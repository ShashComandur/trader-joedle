import { redirect } from '@sveltejs/kit';

export async function POST({ cookies }) {
    cookies.delete('trader-joedle-auth', { path: '/' });
    throw redirect(302, '/auth');
}