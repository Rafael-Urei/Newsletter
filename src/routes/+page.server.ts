import * as db from '$lib/server/emailVerification.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	confirm: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			const email = cookies.get('email');
			if (!email) {
				cookies.set('email', data.get('email') as string, { path: '/' });
			}
			db.validateEmail(data.get('email') as string);
			db.sendEmail(data.get('email') as string);
		} catch (error) {
			if (error instanceof Error) {
				return fail(442, {
					email: data.get('email'),
					error: error.message
				});
			}
		}
	}
};
