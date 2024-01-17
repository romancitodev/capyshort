'use client';

import { Link } from '@/lib/types';
import { Copy, EyeIcon, Trash } from 'lucide-react';

type CardProps = {} & Link;

export function UrlCard({ views, url, name }: CardProps) {
	return (
		<div className='flex flex-col justify-between w-full h-full gap-y-5 rounded-xl bg-violet-50 ring-2 ring-violet-500 p-5'>
			<div className='flex flex-col gap-y-2'>
				<h2 className='font-bold text-lg text-zinc-950'>{name}</h2>
				<div className='w-full min-h-[2px] bg-violet-300' />
				<h1 className='text-violet-500'>
					<a href={url} target='_blank' rel='noopener noreferrer'>
						{url}
					</a>
				</h1>
			</div>
			<p className='flex flex-row justify-between text-violet-600'>
				<p className='flex flex-row items-start gap-x-2 text-sm text-ellipsis'>
					<EyeIcon size='20' />
					<span className='font-bold text-zinc-600'>{views}</span>
				</p>
				<div className='flex gap-x-2'>
					<button type='button'>
						<Copy size='20' />
					</button>
					<button type='button'>
						<Trash size='20' />
					</button>
				</div>
			</p>
		</div>
	);
}
