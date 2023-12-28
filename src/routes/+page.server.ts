import * as db from '$lib/server/emailVerification.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	confirm: async ({ cookies, request, url }) => {
		let success = false;
		const data = await request.formData();
		try {
			db.validateEmail(data.get('email') as string);
			cookies.set('email', data.get('email') as string, { path: '/' });
			success = true;
			db.sendEmail(data.get('email') as string);
		} catch (error) {
			success = false;
			if (error instanceof Error) {
				return fail(442, {
					email: data.get('email'),
					error: error.message
				});
			}
		}
		if (success) {
			throw redirect(303, url.searchParams.get('redirectTo') || '/');
		}
	}
};
