import { Eye } from 'lucide-react';

export function Views({ content }: { content: number }) {
	return (
		<p className='flex font-semibold text-sm gap-x-2'>
			<Eye />
			<span className=' min-w-10 text-end'>{content}</span>
		</p>
	);
}
