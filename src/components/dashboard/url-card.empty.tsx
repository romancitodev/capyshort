import { Card } from '@/components/ui/dashboard/card';

export function NoUrls() {
	return (
		<Card>
			<div className='w-full text-center'>
				<Card.Header>You don't have shortened links already 😢</Card.Header>
			</div>
		</Card>
	);
}
