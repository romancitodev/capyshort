import { UrlCardsSkeleton } from '@/components/dashboard/url-cards';
import {
	TotalCards,
	TotalClicks,
} from '@/components/ui/dashboard/info/skeleton';

export default function LoadingDashboard() {
	return (
		<div className='grid w-full h-full gap-6'>
			<div className='flex h-full w-full gap-10 justify-between'>
				<UrlCardsSkeleton />
				<div className='grid w-2/6 h-full gap-6'>
					<TotalCards />
					<TotalClicks />
				</div>
			</div>
		</div>
	);
}
