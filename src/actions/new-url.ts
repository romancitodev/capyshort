'use server';

import { db } from '@/lib/db';
import { ActionResponse, Maybe, isNotNull } from '@/lib/types';
import { UrlSchema, UrlType } from '@/schemas';
import { User } from 'next-auth';

export async function newUrl(
	data: UrlType,
	session: Maybe<User>,
): Promise<ActionResponse> {
	const safeData = UrlSchema.safeParse(data);

	if (!safeData.success) {
		return { type: 'error', content: 'Invalid fields' };
	}

	const { url, custom_code, name } = safeData.data;

	await db.link.create({
		data: {
			userId: isNotNull(session) ? session.id : null,
			url,
			code: custom_code || generateCode(),
			name,
		},
	});

	return { type: 'success', content: 'Url created' };
}

const generateCode = () => Math.random().toString(36).substring(2);
