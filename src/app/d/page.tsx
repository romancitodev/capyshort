import { auth } from '@/app/auth';
import { DashboardHome } from './page.client';
export default async function DashboardPage() {
	const session = await auth();

	if (!session || !session.user) return;

	return (
		<div className='grid h-full w-full items-start p-5 bg-zinc-100'>
			<DashboardHome />
		</div>
	);
}
