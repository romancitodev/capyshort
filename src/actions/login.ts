'use server';

import { LoginSchema, type LoginType } from '@/schemas';
import { signIn } from '@/app/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/app/routes';
import { AuthError } from 'next-auth';
import { ActionResponse } from '@/lib/types';

export async function login(data: LoginType): Promise<ActionResponse> {
	const validatedData = LoginSchema.safeParse(data);

	if (!validatedData.success)
		return {
			type: 'error',
			content: 'Invalid fields.',
		};

	const { username, password } = validatedData.data;

	try {
		await signIn('credentials', {
			username,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (err) {
		if (err instanceof AuthError) {
			switch (err.type) {
				case 'CredentialsSignin':
					return { type: 'error', content: 'Invalid credentials' };
				default:
					return { type: 'error', content: err.message };
			}
		}
		throw err;
	}

	return { type: 'success', content: 'logged in' };
}
