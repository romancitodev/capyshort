'use server';

import { db } from '@/lib/db';
import { ActionResponse, Maybe } from '@/lib/types';
import { Link } from '@prisma/client';
import {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';

type Data = Pick<Link, 'id' | 'code' | 'name'> & { changed: boolean };

export async function editUrl({
	id,
	code,
	name,
	changed,
}: Data): Promise<Maybe<ActionResponse>> {
	if (changed) {
		const existsCodeAlready = await db.link.findUnique({ where: { code } });

		if (existsCodeAlready)
			return {
				type: 'error',
				content: 'The code already exists, you might use another one.',
			};
	}

	try {
		await db.link.update({ data: { code, name }, where: { id } });
		// biome-ignore lint/suspicious/noExplicitAny: `any` is better than `unknown`
	} catch (err: any) {
		console.error(err);
		if (
			('name' in err && 'message' in err) ||
			err instanceof PrismaClientKnownRequestError ||
			err instanceof PrismaClientUnknownRequestError
		)
			return {
				type: 'error',
				content: err.message,
			};
	}

	return null;
}
