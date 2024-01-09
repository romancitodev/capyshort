import { cn } from '@/lib/utils';
import { Warn } from '@/components/icons/warn';
import { Success } from '@/components/icons/success';
import { Wrong } from '@/components/icons/wrong';
import { Info } from '@/components/icons/info';

type MessageType = 'warn' | 'success' | 'error' | 'info';

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
				'flex gap-x-5 items-center justify-center w-full h-[50px] rounded-xl font-bold',
				type === 'error' && 'bg-red-200/75 text-red-600 ',
				type === 'warn' && 'bg-orange-200/75 text-orange-600 ',
				type === 'success' && 'bg-emerald-200/75 text-emerald-600 ',
				type === 'info' && 'bg-violet-200/75 text-violet-600 ',
			)}
		>
			{type === 'error' && <Wrong />}
			{type === 'warn' && <Warn />}
			{type === 'success' && <Success />}
			{type === 'info' && <Info />}
			{content}
		</div>
	);
}
