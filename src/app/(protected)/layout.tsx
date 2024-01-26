import { Sidebar } from '@/components/dashboard/side-bar';
import { auth } from '@/app/auth';
import { SidebarWrapper } from '@/components/dashboard/side-bar-wrapper';
import React from 'react';
import { Header } from './header';

type Props = {
	children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
	const session = await auth();

	if (!session || !session.user) return;

	return (
		<div className='flex flex-col w-full h-full bg-zinc-100 gap-10'>
			<div className='aboslute grid gap-y-10 h-max w-full pt-5 px-5 sticky top-0 bg-zinc-100/50 backdrop-blur'>
				<div className='w-full h-[90px] flex rounded-3xl sticky top-5'>
					<div className='flex w-full h-full gap-x-10'>
						<Header />
						<SidebarWrapper session={session}>
							<Sidebar />
						</SidebarWrapper>
					</div>
				</div>
				<div className='flex w-full h-0.5 items-center justify-center'>
					<span className='bg-stone-900 w-full h-full' />
				</div>
			</div>
			<div className='flex h-max w-full bg-zinc-100 px-5 pb-5'>{children}</div>
		</div>
	);
}
