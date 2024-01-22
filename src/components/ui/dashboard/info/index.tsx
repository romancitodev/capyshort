'use client';

import { useLinks } from '@/app/store/links';
import { Skeleton } from './skeleton';

export { Skeleton };

export function TotalCards() {
	const { links } = useLinks();

	return (
		<div className='h-[75px] w-full flex justify-between bg-white items-center px-6 rounded-xl'>
			<p className='text-stone-900 font-semibold'>Total links</p>
			<span className='px-5 py-2 rounded-xl bg-zinc-100 text-stone-900 font-medium text-lg'>
				{links.length}
			</span>
		</div>
	);
}
