'use client';

import { Panel } from '@/components/ui/dashboard/panel';
import { BarChart2, Home, LogIn, Plus, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { useModal } from '@/store/new-modal';
import Link from 'next/link';

export function Sidebar() {
	const { toggleState } = useModal();

	const pathname = usePathname();

	const style = (path: string) =>
		cn(
			'transition-all p-0',
			'flex justify-center items-center gap-x-2 h-[35px] w-[35px] rounded-xl text-white/50 border',
			pathname === path &&
				'bg-pr-button/30 hover:bg-pr-button/50 hover:text-white/75 border-primary/75',
			pathname !== path &&
				'bg-pr-button/15 hover:bg-pr-button/25 hover:text-white/50 border-primary/30',
		);

	return (
		<Panel>
			<div className='flex w-min h-min'>
				<Panel.Button
					className='p-0 rounded-xl w-[35px] h-[35px] bg-primary/30 border border-primary/50 text-violet-100/50'
					onClick={() => toggleState()}
				>
					<Plus size='20' />
				</Panel.Button>
			</div>
			<Panel.Content>
				<Link href='/d' as='/d'>
					<Panel.Button className={style('/d')}>
						<Home size='20' />
					</Panel.Button>
				</Link>
				<Link href='/a'>
					<Panel.Button className={style('/a')}>
						<BarChart2 size='20' />
					</Panel.Button>
				</Link>
				<Panel.Button className={style('/s')}>
					<Settings size='20' />
				</Panel.Button>
			</Panel.Content>
			<Panel.Footer>
				<Panel.Button
					className='p-0 rounded-xl w-[35px] h-[35px] bg-primary/30 border border-primary/50 text-violet-100/50'
					onClick={() => {
						signOut();
					}}
				>
					<LogIn size='20' />
				</Panel.Button>
			</Panel.Footer>
		</Panel>
	);
}
