import { string, z } from 'zod';

export const LoginSchema = z.object({
	username: z.string().min(1, {
		message: 'Username is required!',
	}),
	password: z.string().min(1, { message: 'Password is required!' }),
});

export type LoginType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
	.object({
		username: z
			.string()
			.min(1, {
				message: 'Username is required!',
			})
			.transform(user => {
				return user.toLowerCase();
			}),
		email: z.string().email({
			message: 'Email is required!',
		}),
		password: z
			.string()
			.min(8, {
				message: 'Password must contain 8 characters at least!',
			})
			.superRefine((password, ctx) => {
				const conditions = [
					{
						regex: /[A-Z]/,
						message: 'Password must contain at least one uppercase letter.',
					},
					{
						regex: /[a-z]/,
						message: 'Password must contain at least one lowercase letter.',
					},
					{ regex: /\d/, message: 'Password must contain at least one digit.' },
					{
						regex: /[^a-zA-Z0-9]/,
						message: 'Password must contain at least one special character.',
					},
				];

				for (const { regex, message } of conditions) {
					if (!regex.test(password)) {
						ctx.addIssue({
							code: 'custom',
							message,
						});
					}
				}
			}),
		check_password: z.string().min(8, {
			message: 'Repeat your password!',
		}),
	})
	.refine(({ password, check_password }) => password === check_password, {
		message: 'Passwords must be equals!',
		path: ['check_password'],
	});

export type RegisterType = z.infer<typeof RegisterSchema>;

export const UrlSchema = z.object({
	url: z.string().url().min(1, { message: 'url is required' }),
	name: z.string().nullable(),
	custom_code: z.string().nullable(),
});

export type UrlType = z.infer<typeof UrlSchema>;

export const StrictUrlSchema = z.object({
	url: z.string().url().min(1, { message: 'url is required' }),
	name: z.string().nullable(),
	code: z.string(),
});

export type StrictUrlType = z.infer<typeof StrictUrlSchema>;
