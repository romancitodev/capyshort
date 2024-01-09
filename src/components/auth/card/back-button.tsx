import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type BackButtonProps = {
	children: React.ReactNode;
	href: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ children, href }: BackButtonProps) {
	return (
		<Button className='text-violet-500 text-md bg-transparent hover:bg-transparent hover:text-violet-600'>
			<Link href={href}>{children}</Link>
		</Button>
	);
}
