import { UrlCard } from '@/components/dashboard/url-card';
import { Links } from '@/lib/types';

type CardProps = {
	cards: Links;
};

export function UrlCards({ cards }: CardProps) {
	return (
		<div className='w-full flex flex-col gap-5'>
			{cards.map(c => (
				<UrlCard key={c.id} {...c} />
			))}
		</div>
	);
}