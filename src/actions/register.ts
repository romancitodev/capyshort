'use server';

import { db } from '@/lib/db';
import { ActionResponse } from '@/lib/types';
import { RegisterSchema, type RegisterType } from '@/schemas';
import {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';
import bcrypt from 'bcryptjs';

export async function register(data: RegisterType): Promise<ActionResponse> {
	const validatedData = RegisterSchema.safeParse(data);

	if (!validatedData.success) {
		return {
			type: 'error',
			content: 'Invalid fields.',
		};
	}

	const { username, email, password } = validatedData.data;

	const possibleUser = await db.user.findFirst({
		where: { OR: [{ name: username }, { email }] },
	});

	if (possibleUser && possibleUser.email === email)
		return { type: 'error', content: 'Email taken.' };

	if (possibleUser && possibleUser.name === username)
		return { type: 'error', content: 'Username taken.' };

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		await db.user.create({
			data: {
				name: username,
				email,
				password: hashedPassword,
			},
		});
		// biome-ignore lint/suspicious/noExplicitAny: `any` is better than `unknown`
	} catch (err: any) {
		if (
			'name' in err ||
			err instanceof PrismaClientKnownRequestError ||
			err instanceof PrismaClientUnknownRequestError
		)
			return {
				type: 'error',
				content: err.message,
			};
	}

	return {
		type: 'info',
		content: 'User created!',
	};
}
