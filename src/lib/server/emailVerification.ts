import { SendEmailResend } from '../../api/send';

export function validateEmail(email: string) {
	const isValid = !email.includes('@');

	if (email === '') {
		throw new Error('This field cannot be blank!');
	}

	if (isValid) {
		throw new Error('Enter a valid email!');
	}
}

export function sendEmail(email: string) {
	SendEmailResend(email);
}
