import { Button, type ButtonProps as Props } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

export function SideButton({
	type,
	children,
	variant,
	className,
	...props
}: ButtonProps) {
	return (
		<Button
			type={type}
			variant={variant}
			className={cn('h-[50px] transition-all', className)}
			{...props}
		>
			{children}
		</Button>
	);
}
