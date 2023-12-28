import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
	if (!cookies.get('email')) {
		throw redirect(307, `/?redirectTo=${url.pathname}`);
	} else {
		const email = cookies.get('email');

		return {
			email
		};
	}
}

export const actions = {
	dismiss: async ({ cookies }) => {
		cookies.delete('email', { path: '/' });
		throw redirect(303, '/');
	}
};
