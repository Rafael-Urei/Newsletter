export function sendEmail(email: string) {
	if (email === '') {
		throw new Error('This field cannot be blank!');
	}
	console.log(email);
}
