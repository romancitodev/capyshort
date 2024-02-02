export function Content({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex w-full h-full justify-between items-center gap-5 px-1'>
			{children}
		</div>
	);
}
