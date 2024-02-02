import { Card } from '@/components/ui/dashboard/card';

export function NoUrls() {
	return (
		<Card>
			<div className='w-full text-center dark:text-foreground text-sm'>
				<p>You don't have shortened links already 😢</p>
			</div>
		</Card>
	);
}
