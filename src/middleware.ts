import authConfig from '@/app/auth.config';
import NextAuth from 'next-auth';
import {
	authPrefix,
	authRoutes,
	publicRoutes,
	DEFAULT_LOGIN_REDIRECT,
} from '@/app/routes';
import { NextResponse } from 'next/server';
const { auth } = NextAuth(authConfig);

export default auth(req => {
	const { nextUrl } = req;

	/// css stuff
	if (nextUrl.pathname.startsWith('/_next/')) {
		return NextResponse.next();
	}

	const isLogged = !!req.auth;

	const onApiRoute = nextUrl.pathname.startsWith(authPrefix);
	const onPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const onAuthRoute = authRoutes.includes(nextUrl.pathname);

	if (onApiRoute) return null;

	if (onAuthRoute) {
		if (isLogged) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return null;
	}

	if (!isLogged && !onPublicRoute)
		return Response.redirect(new URL('/login', nextUrl));

	return null;
});

export const config = {
	matchers: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
