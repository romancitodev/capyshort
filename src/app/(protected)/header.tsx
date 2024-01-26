'use client';

import { usePathname } from 'next/navigation';
import { Filters } from '@/components/dashboard/filters';
import { Capybara } from '@/components/icons/capybara';

export function Header() {
	const pathname = usePathname();
	return pathname === '/d' ? (
		<Filters />
	) : (
		<header className='flex w-full items-center gap-5 justify-center'>
			<Capybara height='50' width='42.1' />
			<span className='font-bold text-2xl text-violet-600'>Capyshort</span>
		</header>
	);
}
