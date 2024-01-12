'use client';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';

import { DEFAULT_LOGIN_REDIRECT } from '@/app/routes';
import { BackButton } from '@/components/auth/card/back-button';
import { CardButton } from '@/components/auth/card/button';
import { Header } from '@/components/auth/card/header';
import { Separator } from '@/components/auth/card/separator';
import { Capybara } from '@/components/icons/capybara';
import { Github } from '@/components/icons/company/github';
import { Google } from '@/components/icons/company/google';
import { signIn } from 'next-auth/react';

type CardProps = {
	children: React.ReactNode;
	back: React.ReactNode;
	href: string;
};

export default function AuthCard({ children, back, href }: CardProps) {
	const onClick = (provider: 'github' | 'google') => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};

	return (
		<Card className='w-[600px] shadow-md bg-violet-50'>
			<CardHeader>
				<Header>
					<Capybara />
				</Header>
			</CardHeader>
			<CardContent className='h-full grid grid-flow-row gap-y-3'>
				{children}
			</CardContent>
			<CardFooter className='grid w-full gap-5'>
				<Separator />
				<div className='grid w-full grid-flow-col gap-x-5'>
					<CardButton
						className='bg-violet-50 ring-1 ring-violet-500 hover:ring-violet-600 hover:bg-violet-100'
						onClick={() => onClick('google')}
					>
						<Google />
					</CardButton>
					<CardButton
						className='bg-violet-50 ring-1 ring-violet-500 hover:ring-violet-600 hover:bg-violet-100'
						onClick={() => onClick('github')}
					>
						<Github />
					</CardButton>
				</div>
				<Separator />
				<BackButton href={href}>{back}</BackButton>
			</CardFooter>
		</Card>
	);
}
