import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const fieldVariants = cva('w-full h-full', {
	variants: {
		variant: {
			row: 'flex w-full justify-between items-center',
			grid: 'grid w-full gap-2',
		},
	},
	defaultVariants: {
		variant: 'row',
	},
});

type FieldProps = {} & VariantProps<typeof fieldVariants> &
	React.HTMLAttributes<HTMLDivElement>;

export function Field({ children, variant, className }: FieldProps) {
	return (
		<div className={cn(fieldVariants({ variant, className }))}>{children}</div>
	);
}
