import { useSlot, SlotChildren, Slot } from '@beqa/react-slots';

import { Sidebar } from '@/components/dashboard/side-bar';
import { auth } from '@/app/auth';
import { SidebarWrapper } from '@/components/dashboard/side-bar-wrapper';
import React from 'react';
import { Capybara } from '@/components/icons/capybara';

type Props = {
	children: SlotChildren<Slot<'header'> | Slot>;
};

export async function SlotLayout({ children }: Props) {
	const session = await auth();

	if (!session || !session.user) return;

	const { slot } = useSlot(children);

	return (
		<div className='flex flex-col w-full h-full gap-10'>
			<div className='aboslute grid gap-y-10 h-full pt-5 sticky backdrop-blur'>
				<div className='w-full flex rounded-3xl sticky'>
					<div className='flex flex-col-reverse gap-5 xl:flex-row min-w-8 w-full h-full'>
						<slot.header>
							<header className='flex w-full items-center gap-5 justify-center rounded-3xl'>
								<Capybara height='50' width='42.1' />
								<span className='font-bold text-2xl text-violet-600'>Capyshort</span>
							</header>
						</slot.header>
						<SidebarWrapper session={session}>
							<Sidebar />
						</SidebarWrapper>
					</div>
				</div>
				<div className='flex w-full h-0.5 items-center justify-center'>
					<span className='bg-primary/30 w-full h-full' />
				</div>
			</div>
			<div className='flex h-max w-full pb-5'>
				<slot.default />
			</div>
		</div>
	);
}
