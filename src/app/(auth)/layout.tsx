import { Light } from '@/components/landing/light';

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='h-full flex items-center justify-center px-5 md:px-0'>
			<div className='absolute inset-0 -z-20 h-full w-full dark:bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]' />
			<Light className='absolute -top-1/4 dark:bg-light -z-10 w-4/5 lg:w-2/5' />
			{children}
		</main>
	);
}
