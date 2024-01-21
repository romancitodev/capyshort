export function Footer({ children }: { children: React.ReactNode }) {
	return (
		<p className='w-full font-medium text-sm text-neutral-500 text-center'>
			{children}
		</p>
	);
}
