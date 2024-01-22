'use server';

import { db } from '@/lib/db';

export async function deleteUrl(id: string) {
	try {
		await db.link.delete({
			where: {
				id,
			},
		});
	} catch (err) {
		console.log(err);
	}
}
