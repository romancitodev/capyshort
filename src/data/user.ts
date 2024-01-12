import { db } from '@/lib/db';

export async function getUserByName(name: string) {
	return await db.user.findUnique({ where: { name } });
}

export async function getUserById(id: string) {
	return await db.user.findUnique({ where: { id } });
}
