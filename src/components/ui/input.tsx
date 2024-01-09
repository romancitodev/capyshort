import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 font-medium text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:ring-neutral-600 focus-visible:outline-none focus-visible:ring-2 ring-1 ring-neutral-300 focus:ring-violet-400 disabled:cursor-not-allowed disabled:opacity-50 bg-violet-50',
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = 'Input';

export { Input };
