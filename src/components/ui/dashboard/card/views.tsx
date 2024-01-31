import { Eye } from 'lucide-react';

export function Views({ content }: { content: number }) {
	return (
		<p className='flex font-semibold text-sm gap-x-2 items-center text-violet-100/60'>
			<Eye />
			<span className=' min-w-10 text-end text-violet-100/80'>{content}</span>
		</p>
	);
}
