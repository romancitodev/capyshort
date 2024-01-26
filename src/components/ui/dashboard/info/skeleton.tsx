import { Skeleton as Sk } from '@/components/ui/skeleton';

Skeleton.TotalCards = TotalCards;
Skeleton.TotalClicks = TotalClicks;

export function Skeleton() {
	return (
		<div className='h-[75px] w-full flex justify-between bg-white items-center px-6 rounded-xl'>
			<p className='text-stone-900 font-semibold'>Total links</p>
			<Sk className='px-5 py-2 rounded-xl min-h-10 bg-black/50' />
		</div>
	);
}
export function TotalCards() {
	return (
		<div className='h-[90px] w-full flex justify-between bg-white items-center p-6 rounded-3xl'>
			<p className='text-stone-900 font-semibold'>Total links</p>
			<span className='px-5 py-2 rounded-xl bg-zinc-100 text-stone-900 font-medium text-lg'>
				0
			</span>
		</div>
	);
}
export function TotalClicks() {
	return (
		<div className='h-[90px] w-full flex justify-between bg-white items-center p-6 rounded-3xl'>
			<p className='text-stone-900 font-semibold'>Total Clicks</p>
			<span className='px-5 py-2 rounded-xl bg-zinc-100 text-stone-900 font-medium text-lg'>
				0
			</span>
		</div>
	);
}
