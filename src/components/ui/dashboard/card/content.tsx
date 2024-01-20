export function Content({ children }: { children: React.ReactNode }) {
	return (
		<h3 className='flex font-semibold text-stone-900 text-xl items-center gap-2'>
			{children}
		</h3>
	);
}

/**
 * function UrlContent({ content }: { content: string }) {
	return (
		<h3 className='flex font-semibold text-stone-900 text-xl items-center gap-2'>
			{content}
			<span>
				<Button variant='ghost'>
					<Copy size='20' />
				</Button>
			</span>
		</h3>
	);
}

 */
