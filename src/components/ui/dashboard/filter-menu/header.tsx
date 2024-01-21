export function Header({ children }: { children: React.ReactNode }) {
	return (
		<p className='flex w-full justify-between font-semibold text-xl text-stone-900'>
			{children}
		</p>
	);
}
