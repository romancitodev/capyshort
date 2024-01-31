export function Image({ url }: { url?: string }) {
	return (
		<img
			src={url ?? 'https://placehold.co/40x40'}
			alt='icon of url'
			className='hidden sm:block max-w-10 min-w-10 max-h-10 min-h-10'
		/>
	);
}
