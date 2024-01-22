import { UrlCards } from '@/components/dashboard/url-cards';
import { auth } from '@/app/auth';
import { getCardsByUser } from '@/data/card';
import { Filters } from '@/components/dashboard/filters';
import { TotalCards } from '@/components/ui/dashboard/info';
import { StoreLinks } from '@/components/dashboard/store-links';

export async function DashboardHome() {
	const session = await auth();

	if (!session || !session.user) return;

	const links = await getCardsByUser(session.user.id);

	return (
		<div className='flex w-full h-screen gap-6 pt-5'>
			<StoreLinks links={links} />
			<UrlCards />
			<div className='flex flex-col h-full w-[600px] gap-5 mr-0'>
				<TotalCards />
				<Filters />
			</div>
		</div>
	);
}
