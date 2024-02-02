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

	// Serve static files from /_next/ directory
	if (nextUrl.pathname.startsWith('/_next/')) {
		return NextResponse.next();
	}

	const isLogged = !!req.auth;
	const onApiRoute = nextUrl.pathname.startsWith(authPrefix);
	const onPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const onAuthRoute = authRoutes.includes(nextUrl.pathname);
	const onProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

	// Public and API routes don't require authentication
	if (onApiRoute || onPublicRoute) {
		return NextResponse.next();
	}

	// Authenticated users shouldn't reach auth routes
	if (onAuthRoute && isLogged) {
		return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
	}

	// Unauthenticated users should be redirected to login page for protected routes
	if (!isLogged && onProtectedRoute) {
		return Response.redirect(new URL('/login', nextUrl));
	}

	// For other paths, treat them as links and attempt to find the corresponding URL
	if (!onPublicRoute && !onProtectedRoute) {
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

			return Response.redirect(new URL('/', nextUrl));
		} catch (error) {
			console.log(error);
			return Response.redirect(new URL('/', nextUrl));
		}
	}

	// Default case, if none of the above conditions met, just proceed to the next middleware
	return null;
});

export const config = {
	matchers: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
