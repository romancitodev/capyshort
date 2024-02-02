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
import { Capybara } from '@/components/icons/new-capy-logo';
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
		<Card className='w-full lg:w-[600px] shadow-md bg-card-background/30 backdrop-blur border border-violet-200/15'>
			<CardHeader>
				<Header>
					<Capybara />
				</Header>
			</CardHeader>
			<CardContent className='h-full w-full grid grid-flow-row gap-y-3'>
				{children}
			</CardContent>
			<CardFooter className='flex flex-col w-full gap-5'>
				<Separator />
				<div className='grid w-full grid-flow-row lg:grid-flow-col gap-5'>
					<CardButton
						className='w-full h-[34px] border border-violet-500/50 bg-pr-button/5 p-5'
						onClick={() => onClick('google')}
					>
						<Google className='fill-current text-white' />
					</CardButton>
					<CardButton
						className='w-full h-[34px] border border-violet-500/50 bg-pr-button/5 p-5'
						onClick={() => onClick('github')}
					>
						<Github className='fill-current text-white' />
					</CardButton>
				</div>
				<Separator />
				<BackButton href={href}>{back}</BackButton>
			</CardFooter>
		</Card>
	);
}
