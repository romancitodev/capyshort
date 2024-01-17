import { UrlCards } from '@/components/dashboard/url-cards';
import { auth } from '@/app/auth';
import { getCardsByUser } from '@/data/card';

export async function DashboardHome() {
	const session = await auth();

	if (!session || !session.user) return;

	const cards = await getCardsByUser(session.user.id);

	return (
		<div className='flex flex-col'>
			<h1 className='font-bold text-4xl'>Recent Urls created by you</h1>
			<UrlCards cards={cards} />
		</div>
	);
}
