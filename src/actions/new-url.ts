'use server';

import { MessageType } from '@/components/messages';
import { getUserById } from '@/data/user';
import { db } from '@/lib/db';
import { UrlSchema, UrlType } from '@/schemas';
import { User } from 'next-auth';

type Response = { type: MessageType; content: string };

export async function newUrl(data: UrlType, session: User): Promise<Response> {
	const safeData = UrlSchema.safeParse(data);

	if (!safeData.success) {
		return { type: 'error', content: 'Invalid fields ' };
	}

	const { url, custom_code, name } = safeData.data;

	await db.link.create({
		data: {
			userId: session.id,
			url,
			code: custom_code || generateCode(),
			name,
		},
	});

	return { type: 'success', content: 'Url created' };
}

const generateCode = () => Math.random().toString(36).substring(2);
