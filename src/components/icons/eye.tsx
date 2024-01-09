type EyeProps = {
	variant: 'open' | 'closed';
};

export function Eye({ variant }: EyeProps) {
	switch (variant) {
		case 'open':
			return <OpenEye />;
		case 'closed':
			return <ClosedEye />;
		default:
			return null;
	}
}

function OpenEye() {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Open eye password</title>
			<path
				d='M1.6665 10C1.6665 10 4.1665 4.16667 9.99984 4.16667C15.8332 4.16667 18.3332 10 18.3332 10C18.3332 10 15.8332 15.8333 9.99984 15.8333C4.1665 15.8333 1.6665 10 1.6665 10Z'
				stroke='#843DFF'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
				stroke='#843DFF'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

function ClosedEye() {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Closed eye password</title>
			<g clip-path='url(#clip0_132_1702)'>
				<path
					d='M8.23319 8.23333C7.98757 8.46221 7.79056 8.73821 7.65392 9.04487C7.51729 9.35154 7.44381 9.68258 7.43789 10.0183C7.43197 10.3539 7.49372 10.6874 7.61945 10.9987C7.74519 11.31 7.93234 11.5927 8.16973 11.8301C8.40713 12.0675 8.68991 12.2547 9.0012 12.3804C9.3125 12.5061 9.64593 12.5679 9.9816 12.562C10.3173 12.556 10.6483 12.4826 10.955 12.3459C11.2617 12.2093 11.5377 12.0123 11.7665 11.7667'
					stroke='#843DFF'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M8.94189 4.23333C9.29299 4.18959 9.64642 4.16733 10.0002 4.16667C15.8336 4.16667 18.3336 10 18.3336 10C17.961 10.7976 17.4937 11.5474 16.9419 12.2333'
					stroke='#843DFF'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M5.50817 5.50833C3.85088 6.63719 2.52473 8.18772 1.6665 10C1.6665 10 4.1665 15.8333 9.99984 15.8333C11.5964 15.8376 13.1588 15.3709 14.4915 14.4917'
					stroke='#843DFF'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M1.6665 1.66667L18.3332 18.3333'
					stroke='#843DFF'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_132_1702'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
}
