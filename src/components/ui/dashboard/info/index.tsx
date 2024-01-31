'use client';

import { useLinks } from '@/store/links';
import { Skeleton } from './skeleton';

export { Skeleton };

export function TotalCards() {
	const { links } = useLinks();

	return (
		<div className='flex justify-between items-center bg-url-card/50 ring-0 border border-url-ring/75 rounded-xl px-6 py-4 text-base text-violet-100'>
			<p>Total links</p>
			<span className='px-5 py-2 rounded-xl bg-primary/15 border border-primary/30 font-medium text-base'>
				{links.length}
			</span>
		</div>
	);
}

export function TotalClicks() {
	const { links } = useLinks();

	return (
		<div className='flex justify-between items-center bg-url-card/50 ring-0 border border-url-ring/75 rounded-xl px-6 py-4 text-base text-violet-100'>
			<p>Total Clicks</p>
			<span className='px-5 py-2 rounded-xl bg-primary/15 border border-primary/30 font-medium text-base'>
				{links.length}
			</span>
		</div>
	);
}
