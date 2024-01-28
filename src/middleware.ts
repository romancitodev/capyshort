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

	/// css stuff
	if (nextUrl.pathname.startsWith('/_next/')) {
		return NextResponse.next();
	}

	const isLogged = !!req.auth;

	const onApiRoute = nextUrl.pathname.startsWith(authPrefix);
	const onPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const onAuthRoute = authRoutes.includes(nextUrl.pathname);
	const onProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

	if (onApiRoute) return null;

	if (onAuthRoute && isLogged)
		return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));

	if (!isLogged && !onPublicRoute)
		return Response.redirect(new URL('/login', nextUrl));

	if (onPublicRoute || onProtectedRoute) return null;

	try {
		const url = nextUrl.pathname.slice(1, nextUrl.pathname.length);
		const urlToFetch =
			process.env.NODE_ENV !== 'production'
				? `http://localhost:3000/api/link?code=${url}`
				: (process.env.DOMAIN as string);
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
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
