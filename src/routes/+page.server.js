export const actions = {
	confirm: async ({ request }) => {
		const data = await request.formData();
		console.log(data.get('email'));
	}
};
