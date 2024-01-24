import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credential from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { LoginSchema } from '@/schemas';
import { getUserByName } from '@/data/user';
import bcrypt from 'bcryptjs';

export default {
	providers: [
		Github({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Credential({
			async authorize(credentials) {
				const fields = LoginSchema.safeParse(credentials);

				if (!fields.success) return null;

				const { username, password } = fields.data;
				const user = await getUserByName(username);
				if (!user || !user.password) return null;

				const passwordMatch = await bcrypt.compare(password, user.password);

				if (!passwordMatch) return null;

				return user;
			},
		}),
	],
	session: { strategy: 'jwt' },
	trustHost: true,
} satisfies NextAuthConfig;
