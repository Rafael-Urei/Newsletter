import * as db from '$lib/server/emailVerification.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	confirm: async ({ request }) => {
		const data = await request.formData();
		try {
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
