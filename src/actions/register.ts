'use server';

import { MessageType } from '@/components/messages';
import { db } from '@/lib/db';
import { RegisterSchema, type RegisterType } from '@/schemas';
import {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';
import bcrypt from 'bcryptjs';

type Response = { type: MessageType; content: string };

export async function register(data: RegisterType): Promise<Response> {
	const validatedData = RegisterSchema.safeParse(data);

	if (!validatedData.success) {
		return {
			type: 'error' as MessageType,
			content: 'Invalid fields.',
		};
	}

	const { username, email, password } = validatedData.data;

	const possibleUser = await db.user.findUnique({ where: { email } });

	if (possibleUser) {
		return { type: 'error', content: 'Email taken.' };
	}

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
				content: err.name,
			};
	}

	return {
		type: 'info',
		content: 'User created!',
	};
}
