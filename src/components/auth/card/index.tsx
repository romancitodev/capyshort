'use client';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';

import { Header } from '@/components/auth/card/header';
import { Capybara } from '@/components/icons/capybara';
import { CardButton } from '@/components/auth/card/button';
import { Separator } from '@/components/auth/card/separator';
import { Login } from '@/components/icons/log-in';
import { BackButton } from '@/components/auth/card/back-button';
import { Google } from '@/components/icons/company/google';
import { Github } from '@/components/icons/company/github';

type CardProps = {
	children: React.ReactNode;
	back: React.ReactNode;
	href: string;
};

export default function AuthCard({ children, back, href }: CardProps) {
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
					<CardButton className='bg-violet-50 ring-1 ring-violet-500 hover:ring-violet-600 hover:bg-violet-100'>
						<Google />
					</CardButton>
					<CardButton className='bg-violet-50 ring-1 ring-violet-500 hover:ring-violet-600 hover:bg-violet-100'>
						<Github />
					</CardButton>
				</div>
				<Separator />
				<BackButton href={href}>{back}</BackButton>
			</CardFooter>
		</Card>
	);
}
