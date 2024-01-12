'use client';

import { SideButton } from '@/components/dashboard/button-bar';
import { LogIn, Plus } from 'lucide-react';
import { Capybara } from '@/components/icons/capybara';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export function Sidebar() {
	const pathname = usePathname();

	const style = (path: string) =>
		cn(
			'transition-colors',
			pathname === path && 'bg-violet-500 text-violet-100 hover:bg-violet-600',
			pathname !== path &&
				'bg-violet-100 text-violet-500 hover:bg-violet-200 hover:text-violet-600',
		);

	return (
		<section className='h-full w-60 flex flex-col mx-5 gap-y-5'>
			<div className='flex w-full justify-center pt-5'>
				<Capybara height='60' width='70' />
			</div>
			<span className='min-h-[2px] w-full bg-violet-400' />
			<div className='w-full grid'>
				<SideButton className='bg-violet-100 text-violet-500 hover:bg-violet-200'>
					<Plus size='20' color='#8b5cf6' />
				</SideButton>
			</div>
			<span className='min-h-[2px] h-[2px] w-full bg-violet-400' />
			<div className='w-full h-full flex flex-col gap-y-5'>
				<SideButton className={style('/d')}>Home</SideButton>
				<SideButton className={style('/d/analytics')}>Analytics</SideButton>
				<SideButton className={style('/d/settings')}>Settings</SideButton>
			</div>
			<span className='min-h-[2px] w-full bg-violet-400' />
			<div className='h-min w-full flex flex-col pb-5'>
				<SideButton
					className='bg-violet-100 text-violet-500 hover:bg-violet-200'
					onClick={() => {
						signOut();
					}}
				>
					<LogIn size='20' color='#8b5cf6' />
				</SideButton>
			</div>
		</section>
	);
}
