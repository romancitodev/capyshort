import { Card } from '@/components/ui/dashboard/card';
import { Link } from '@/lib/types';
import { Settings } from 'lucide-react';
import { relativeTime } from 'human-date';

type CardProps = {} & Link;

export function UrlCard({ views, createdAt, name, code, url }: CardProps) {
	const formattedName = name || new URL(url).hostname;

	const relative = relativeTime(createdAt);

	console.log(relative);

	return (
		<Card>
			<Card.Image />
			<div className='w-full'>
				<Card.Header>
					{formattedName}
					<h2 className='font-normal text-sm text-neutral-400'>
						{relative === 'ago' ? 'Now' : relative}
					</h2>
				</Card.Header>
				<Card.Content>{`capyshort.dev/${code}`}</Card.Content>
			</div>
			<div className='flex w-min gap-x-5 items-center text-center'>
				<Card.Views content={views} />
				<Card.Button>
					<Settings size='20' />
				</Card.Button>
			</div>
		</Card>
	);
}
