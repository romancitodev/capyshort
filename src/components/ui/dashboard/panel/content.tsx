export function Content({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-4/5 md:w-full h-full flex items-center justify-evenly gap-x-2 md:gap-0'>
			{children}
		</div>
	);
}
