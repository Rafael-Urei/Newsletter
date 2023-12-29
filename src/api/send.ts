import { Resend } from 'resend';
import { SECRET_RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(`${SECRET_RESEND_API_KEY}`);

export async function SendEmailResend(email: string) {
	const { data, error } = await resend.emails.send({
		from: 'Newsletter <onboarding@resend.dev>',
		to: [`${email}`],
		subject: "You're in! Congrats!",
		html: '<h1>You just need to <strong>confirm<strong> your subscription!</h1><br><button style="color:#ffffff;font-size:16px;border-radius:8px;padding:10px;background-color:#205EE3;border:none;outline:none;">Confirm</button>'
	});

	if (error) {
		return console.error({ error });
	}

	console.log(data);
}
