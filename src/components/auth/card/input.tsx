import { InputHTMLAttributes } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type InputProps = {
	hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function CardInput({ placeholder, hint, ...props }: InputProps) {
	return (
		<div className='grid gap-1'>
			<p className='font-medium text-lg stone-900'>{hint ?? ''}</p>
			<Input
				placeholder={placeholder}
				className={cn('w-full h-[50px] rounded-xl transition-all', props.className)}
				{...props}
			/>
		</div>
	);
}
