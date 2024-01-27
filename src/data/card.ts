import { db } from '@/lib/db';

export async function getLinksByUser(userId: string) {
	return await db.link.findMany({ where: { userId } });
}
