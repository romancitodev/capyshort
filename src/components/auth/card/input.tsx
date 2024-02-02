import { InputHTMLAttributes } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type InputProps = {
	hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function CardInput({ hint, ...props }: InputProps) {
	return (
		<div className='grid gap-2 w-full'>
			<p className='font-medium text-sm text-foreground md:text-lg'>
				{hint ?? ''}
			</p>
			<Input
				className={cn(
					'w-full h-[34px] rounded-lg transition-all bg-black/15 ring-0 border focus:border-violet-600/75 border-zinc-600/30 focus:border outline-none focus:ring-0text-xs',
					props.className,
				)}
				{...props}
			/>
		</div>
	);
}
