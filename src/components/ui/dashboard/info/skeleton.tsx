import { Skeleton as Sk } from '@/components/ui/skeleton';

export function Skeleton() {
	return (
		<div className='h-[75px] w-full flex justify-between bg-white items-center px-6 rounded-xl'>
			<p className='text-stone-900 font-semibold'>Total links</p>
			<Sk className='px-5 py-2 rounded-xl min-h-10 bg-black/50' />
		</div>
	);
}
