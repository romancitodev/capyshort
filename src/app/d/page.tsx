import { auth } from '@/app/auth';
import { DashboardHome } from './page.client';
export default async function DashboardPage() {
	const session = await auth();

	if (!session || !session.user) return;

	return <DashboardHome />;
}
