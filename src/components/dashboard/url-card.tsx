'use client';

import { Link } from '@/lib/types';
import { Copy, Eye, Settings } from 'lucide-react';
import { Button } from '../ui/button';

type CardProps = {} & Link;

export function UrlCard({ views, createdAt, name, code, url }: CardProps) {
	const formattedName = name ?? url;

	return (
		<div className='bg-white rounded-xl flex flex-1 px-4 py-2 gap-5 max-h-[75px] min-w-48 shadow-md items-center'>
			<UrlImage />
			<div className='w-full'>
				<div className='flex flex-row items-center text-start gap-x-3 w-full'>
					<UrlHeader content={formattedName} />
					<Dot />
					<UrlTimestamp content={createdAt.toLocaleDateString()} />
				</div>
				<UrlContent content={`capyshort.dev/${code}`} />
			</div>
			<div className='flex w-min gap-x-5 items-center'>
				<UrlViews content={views} />
				<Button className='w-[50px] h-[50px] bg-violet-100 text-violet-500 hover:textviolet-600 hover:bg-violet-200'>
					<Settings size='20' />
				</Button>
			</div>
		</div>
	);
}

function UrlImage({ url }: { url?: string }) {
	return (
		<img
			src={url ?? 'https://placehold.co/40x40'}
			alt='icon of url'
			className='max-w-10 min-w-10 max-h-10 min-h-10'
		/>
	);
}

function UrlHeader({ content }: { content: string }) {
	return <h2 className=' font-semibold text-sm text-gray-700'>{content}</h2>;
}

function UrlTimestamp({ content }: { content: string }) {
	return <h2 className=' font-semibold text-sm text-neutral-400'>{content}</h2>;
}

function UrlContent({ content }: { content: string }) {
	return (
		<h3 className='flex font-semibold text-stone-900 text-xl items-center gap-2'>
			{content}
			<span>
				<Button variant='ghost'>
					<Copy size='20' />
				</Button>
			</span>
		</h3>
	);
}

function UrlViews({ content }: { content: number }) {
	return (
		<p className='flex font-semibold text-sm gap-x-2'>
			<Eye />
			<span className=' min-w-10 text-end'>{content}</span>
		</p>
	);
}

function Dot() {
	return (
		<svg
			width='6'
			height='7'
			viewBox='0 0 6 7'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Simple dot</title>
			<circle cx='3' cy='3.5' r='3' fill='#1E1E1E' />
		</svg>
	);
}
