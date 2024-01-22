import {
	Button as ShadcnButton,
	type ButtonProps as ShadcnButtonProps,
} from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

type ButtonProps = {} & ShadcnButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, ...props }, ref) => {
		return (
			<ShadcnButton
				className={cn(
					'w-[50px] h-[50px] bg-violet-100 text-violet-500 hover:textviolet-600 hover:bg-violet-200 outline-none focus-visible:outline-none focus-visible:ring-ring ',
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</ShadcnButton>
		);
	},
);
