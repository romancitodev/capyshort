'use client';

import { UrlCard } from '@/components/dashboard/url-card';
import { NoUrls } from '@/components/dashboard/url-card.empty';
import { useLinks } from '@/app/store/links';
import { LoadingUrls } from './url-card.loading';

export function UrlCards() {
	const { links, loading } = useLinks();

	if (loading)
		return (
			<div className='w-full flex flex-col gap-5'>
				<LoadingUrls />
			</div>
		);

	return (
		<div className='w-full h-full flex flex-col gap-5 p-2 pt-0 overflow-y-scroll scrollbar-hide'>
			{links.length > 0 ? (
				links
					.sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf())
					.map(c => <UrlCard key={c.id} {...c} />)
			) : (
				<NoUrls />
			)}
		</div>
	);
}
