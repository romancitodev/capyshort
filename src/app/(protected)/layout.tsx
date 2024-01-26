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
		<div className='flex flex-col w-full h-full p-6 bg-zinc-100 gap-7'>
			<div className='flex gap-10 h-min'>
				<div className='w-full h-[90px] flex bg-white rounded-3xl shadow'>
					<Header />
				</div>
				<SidebarWrapper session={session}>
					<Sidebar />
				</SidebarWrapper>
			</div>
			<div className='flex w-full h-0.5 items-center justify-center'>
				<span className='bg-stone-900 w-full h-full' />
			</div>
			<div className='w-full h-min'>{children}</div>
		</div>
	);
}
