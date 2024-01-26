export function Content({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-min h-full flex gap-5 items-center justify-between'>
			{children}
		</div>
	);
}
