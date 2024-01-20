export function Header({
	children,
}: { children: React.ReactNode | React.ReactNode[] }) {
	if (Array.isArray(children)) {
		const [header, ...extra] = children;
		return (
			<div className='flex flex-row items-center text-start gap-x-3 w-full'>
				<h2 className='font-semibold text-sm text-gray-700'>{header}</h2>
				{extra.map(item => {
					return (
						<>
							<Dot />
							{item}
						</>
					);
				})}
			</div>
		);
	}

	return <h2 className='font-semibold text-sm text-gray-700'>{children}</h2>;
}

export function Dot() {
	return (
		<svg
			width='6'
			height='7'
			viewBox='0 0 6 7'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Simple dot</title>
			<circle cx='3' cy='3.5' r='3' fill='#1E1E1E' />
		</svg>
	);
}
