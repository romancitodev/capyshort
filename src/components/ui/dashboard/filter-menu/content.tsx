export function Content({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex w-full h-min justify-between items-center gap-5'>
			{children}
		</div>
	);
}
