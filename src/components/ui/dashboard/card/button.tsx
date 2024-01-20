import { Button as ButtonUi } from '@/components/ui/button';

export function Button({ children }: { children: React.ReactNode }) {
	return (
		<ButtonUi className='w-[50px] h-[50px] bg-violet-100 text-violet-500 hover:textviolet-600 hover:bg-violet-200'>
			{children}
		</ButtonUi>
	);
}
