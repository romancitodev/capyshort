import authConfig from '@/app/auth.config';
import NextAuth from 'next-auth';
import {
	authPrefix,
	authRoutes,
	publicRoutes,
	DEFAULT_LOGIN_REDIRECT,
	protectedRoutes,
} from '@/app/routes';
import { NextResponse } from 'next/server';
const { auth } = NextAuth(authConfig);

export default auth(async req => {
	const { nextUrl } = req;

	console.log(nextUrl);

	/// css stuff
	if (nextUrl.pathname.startsWith('/_next/')) {
		return NextResponse.next();
	}

	const isLogged = !!req.auth;

	const onApiRoute = nextUrl.pathname.startsWith(authPrefix);
	const onPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const onAuthRoute = authRoutes.includes(nextUrl.pathname);
	const onProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

	console.log({
		isLogged,
		onApiRoute,
		onPublicRoute,
		onAuthRoute,
		onProtectedRoute,
	});

	if (onApiRoute) return null;
	if (onPublicRoute) return null;

	if (onAuthRoute && isLogged)
		return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));

	if (onAuthRoute && !isLogged) return null;

	if (!isLogged && !onPublicRoute)
		return Response.redirect(new URL('/login', nextUrl));

	if (onPublicRoute || onProtectedRoute) return null;

	try {
		const url = nextUrl.pathname.slice(1, nextUrl.pathname.length);
		const urlToFetch =
			process.env.NODE_ENV !== 'production'
				? `http://localhost:3000/api/link?code=${url}`
				: `${process.env.DOMAIN}/api/link?code=${url}`;
		const foundedUrl: { link: string | null } = await (
			await fetch(urlToFetch)
		).json();

		if (foundedUrl.link) {
			return NextResponse.redirect(new URL(foundedUrl.link));
		}
	} catch (error) {
		console.log(error);
		return Response.redirect(new URL('/', nextUrl));
	}

	return null;
});

export const config = {
	matchers: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
