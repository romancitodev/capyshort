import { cn } from '@/lib/utils';
import {
	AlertTriangle as Warn,
	Check as Success,
	X as Wrong,
	Info,
} from 'lucide-react';

export type MessageType = 'warn' | 'success' | 'error' | 'info';

type MessageProps = {
	type: MessageType;
	content: string;
};

export function Message(
	{ type, content }: MessageProps = { type: 'info', content: 'Lorem ipsum' },
) {
	return (
		<div
			className={cn(
				'flex gap-x-5 items-center justify-center w-full min-h-[34px] rounded-xl font-medium text-sm text-white/75',
				type === 'error' && 'bg-red-600/25 border border-red-600/50',
				type === 'warn' && 'bg-orange-600/25 border border-orange-600/50',
				type === 'success' && 'bg-emerald-600/25 border border-emerald-600/50',
				type === 'info' && 'bg-violet-500/25 border border-violet-500/50',
			)}
		>
			{type === 'error' && <Wrong size='20' className='text-red-300/75' />}
			{type === 'warn' && <Warn size='20' className='text-orange-300/75' />}
			{type === 'success' && <Success size='20' className='text-emerald-300/75' />}
			{type === 'info' && <Info size='20' className='text-violet-300/75' />}
			{content}
		</div>
	);
}
