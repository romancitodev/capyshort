import { type ButtonProps, Button as ButtonUi } from '@/components/ui/button';

export function Button({ children, ...props }: ButtonProps) {
	return <ButtonUi {...props}>{children}</ButtonUi>;
}
