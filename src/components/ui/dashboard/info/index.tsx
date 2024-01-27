'use client';

import { useLinks } from '@/store/links';
import { Skeleton } from './skeleton';

export { Skeleton };

export function TotalCards() {
	const { links } = useLinks();

	return (
		<div className='h-[90px] w-full flex justify-between bg-white items-center p-6 rounded-3xl'>
			<p className='text-stone-900 font-semibold'>Total links</p>
			<span className='px-5 py-2 rounded-xl bg-zinc-100 text-stone-900 font-medium text-lg'>
				{links.length}
			</span>
		</div>
	);
}

export function TotalClicks() {
	const { links } = useLinks();

	return (
		<div className='h-[90px] w-full flex justify-between bg-white items-center p-6 rounded-3xl'>
			<p className='text-stone-900 font-semibold'>Total Clicks</p>
			<span className='px-5 py-2 rounded-xl bg-zinc-100 text-stone-900 font-medium text-lg'>
				{links.length}
			</span>
		</div>
	);
}
