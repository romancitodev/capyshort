import React from 'react';

type HeaderProps = {
	children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
	return (
		<section className='w-full flex flex-col gap-y-4 items-center font-bold'>
			{children}
		</section>
	);
}
