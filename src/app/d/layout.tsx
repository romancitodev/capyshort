import { Sidebar } from '@/components/dashboard/side-bar';
import { auth } from '@/app/auth';

export default async function Layout({
	children,
}: { children: React.ReactNode }) {
	const session = await auth();

	if (!session || !session.user) return;

	return (
		<div className='h-full flex flex-row'>
			<Sidebar session={session} />
			{children}
		</div>
	);
}
