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
				'flex gap-x-5 items-center justify-center w-full h-[50px] rounded-xl font-bold shadow',
				type === 'error' && 'bg-red-200/75 text-red-600 ',
				type === 'warn' && 'bg-orange-200/75 text-orange-600 ',
				type === 'success' && 'bg-emerald-200/75 text-emerald-600 ',
				type === 'info' && 'bg-violet-200/75 text-violet-600 ',
			)}
		>
			{type === 'error' && <Wrong size='20' />}
			{type === 'warn' && <Warn size='20' />}
			{type === 'success' && <Success size='20' />}
			{type === 'info' && <Info size='20' />}
			{content}
		</div>
	);
}
