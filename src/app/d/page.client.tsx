import { UrlCards } from '@/components/dashboard/url-cards';
import { auth } from '@/app/auth';
import { getCardsByUser } from '@/data/card';
import { Filters } from '@/components/dashboard/filters';
import TotalCards from '@/components/dashboard/total-cards';

export async function DashboardHome() {
	const session = await auth();

	if (!session || !session.user) return;

	const cards = await getCardsByUser(session.user.id);

	return (
		<div className='flex w-full h-full gap-6'>
			<UrlCards cards={cards} />
			<div className='flex flex-col h-full w-[600px] gap-5'>
				<TotalCards cards={cards.length} />
				<Filters />
			</div>
		</div>
	);
}
