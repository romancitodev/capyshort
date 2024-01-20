import { PrismaClient } from '@prisma/client';

declare global {
	/*
	 * biome-ignore lint/style/noVar: Biome doesn't understand the context, but in this
	 * case, we need to declare as var for the `declare`.
	 */
	var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
