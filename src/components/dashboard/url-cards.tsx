'use client';

import { UrlCard } from '@/components/dashboard/url-card';
import { NoUrls } from '@/components/dashboard/url-card.empty';
import { useLinks } from '@/store/links';
import { LoadingUrls } from './url-card.loading';
import { Link } from '@prisma/client';
import { filterUrls } from '@/criteria/filters/url';

export function UrlCards() {
	const { links, loading, ordering, filter } = useLinks();

	const filtered = filter ? filterUrls(links, { name: filter }) : links;

	if (loading)
		return (
			<div className='flex flex-col w-full h-full gap-6 overflow-y-scroll scrollbar-hide'>
				<LoadingUrls />
			</div>
		);

	return (
		<li className='flex flex-col w-full h-min gap-6 overflow-y-scroll scrollbar-hide'>
			{filtered.length > 0 ? (
				filtered.sort(sort[ordering]).map(c => (
					<ul key={c.id}>
						<UrlCard {...c} />
					</ul>
				))
			) : (
				<NoUrls />
			)}
		</li>
	);
}

const sort = {
	desc: (a: Link, b: Link) => b.createdAt.valueOf() - a.createdAt.valueOf(),
	asc: (a: Link, b: Link) => a.createdAt.valueOf() - b.createdAt.valueOf(),
};

export function UrlCardsSkeleton() {
	return (
		<div className='flex flex-col w-full h-full bg-zinc-100 gap-6 overflow-y-scroll scrollbar-hide'>
			<LoadingUrls />
		</div>
	);
}
