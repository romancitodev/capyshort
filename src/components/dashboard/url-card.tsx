import { Card } from '@/components/ui/dashboard/card';
import { Link } from '@/lib/types';
import { Settings } from 'lucide-react';

type CardProps = {} & Link;

export function UrlCard({ views, createdAt, name, code, url }: CardProps) {
	const formattedName = name ?? url;

	return (
		<Card>
			<Card.Image />
			<div className='w-full'>
				<Card.Header>
					{formattedName}
					<h2 className=' font-semibold text-sm text-neutral-400'>
						{createdAt.toDateString()}
					</h2>
				</Card.Header>
				<Card.Content>{`capyshort.dev/${code}`}</Card.Content>
			</div>
			<div className='flex w-min gap-x-5 items-center'>
				<Card.Views content={views} />
				<Card.Button>
					<Settings size='20' />
				</Card.Button>
			</div>
		</Card>
	);
}
