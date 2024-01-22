import { Sidebar } from '@/components/dashboard/side-bar';
import { auth } from '@/app/auth';
import { SidebarWrapper } from '@/components/dashboard/side-bar-wrapper';

export default async function Layout({
	children,
}: { children: React.ReactNode }) {
	const session = await auth();

	if (!session || !session.user) return;

	return (
		<div className='flex flex-row w-full h-full'>
			<SidebarWrapper session={session}>
				<Sidebar />
			</SidebarWrapper>
			<div className='w-full h-screen px-5 bg-zinc-100'>{children}</div>
		</div>
	);
}
