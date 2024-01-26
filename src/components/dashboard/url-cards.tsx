'use client';

import { UrlCard } from '@/components/dashboard/url-card';
import { NoUrls } from '@/components/dashboard/url-card.empty';
import { useLinks } from '@/store/links';
import { LoadingUrls } from './url-card.loading';
import { Link } from '@prisma/client';

export function UrlCards() {
	const { links, loading, ordering, filtering } = useLinks();

	if (loading)
		return (
			<div className='w-full flex flex-col gap-5'>
				<LoadingUrls />
			</div>
		);

	return (
		<div className='w-full h-full flex flex-col gap-6 p-2 pt-0 overflow-y-scroll scrollbar-hide'>
			{links.length > 0 ? (
				links.sort(sort[ordering]).map(c => <UrlCard key={c.id} {...c} />)
			) : (
				<NoUrls />
			)}
		</div>
	);
}

const sort = {
	desc: (a: Link, b: Link) => b.createdAt.valueOf() - a.createdAt.valueOf(),
	asc: (a: Link, b: Link) => a.createdAt.valueOf() - b.createdAt.valueOf(),
};
