import { db } from '@/lib/db';

export async function getCardsByUser(userId: string) {
	return await db.link.findMany({ where: { userId } });
}
