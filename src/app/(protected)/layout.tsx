import { Light } from '@/components/landing/light';

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<div className='w-full h-full p-5'>
			<Light className='absolute -top-1/4 dark:bg-light -z-10 w-4/5' />
			{children}
		</div>
	);
}
