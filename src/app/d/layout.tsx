import { Sidebar } from '@/components/dashboard/side-bar';
import { auth } from '@/app/auth';
import { SidebarWrapper } from '@/components/dashboard/side-bar-wrapper';

export default async function Layout({
	children,
}: { children: React.ReactNode }) {
	const session = await auth();

	if (!session || !session.user) return;

	return (
		<div className='h-full flex flex-row'>
			<SidebarWrapper session={session}>
				<Sidebar />
			</SidebarWrapper>
			{children}
		</div>
	);
}
