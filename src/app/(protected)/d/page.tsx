import { UrlCards } from '@/components/dashboard/url-cards';
import { auth } from '@/app/auth';
import { getLinksByUser } from '@/data/card';
import { TotalCards, TotalClicks } from '@/components/ui/dashboard/info';
import { StoreLinks } from '@/components/dashboard/store-links';
import { Filters } from '@/components/dashboard/filters';
import { SlotLayout } from '../slot-layout';
import React from 'react';

export default async function DashboardHome() {
	const session = await auth();

	if (!session || !session.user) return;

	const links = await getLinksByUser(session.user.id);

	return (
		<SlotLayout>
			<Filters slot-name='header' />
			<div className='flex h-full w-full gap-10 justify-betweens'>
				<StoreLinks links={links} />
				<UrlCards />
				<div className=' flex-col w-2/6 h-full gap-6 hidden lg:flex'>
					<TotalCards />
					<TotalClicks />
				</div>
			</div>
		</SlotLayout>
	);
}
