import { UrlCards } from '@/components/dashboard/url-cards';
import { auth } from '@/app/auth';
import { getCardsByUser } from '@/data/card';
import { TotalCards, TotalClicks } from '@/components/ui/dashboard/info';
import { StoreLinks } from '@/components/dashboard/store-links';

export async function DashboardHome() {
	const session = await auth();

	if (!session || !session.user) return;

	const links = await getCardsByUser(session.user.id);

	return (
		<div className='grid w-full h-auto gap-7'>
			<StoreLinks links={links} />
			<div className='flex h-full w-full gap-10 justify-between'>
				<UrlCards />
				<div className='flex flex-col w-2/6 h-full gap-6'>
					<TotalCards />
					<TotalClicks />
				</div>
			</div>
		</div>
	);
}
