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
			'transition-all',
			'flex justify-center items-center gap-x-2 w-full h-[50px] w-[50px]',
			pathname === path &&
				'bg-violet-500 text-violet-100 hover:bg-violet-600 rounded-xl',
			pathname !== path &&
				'bg-violet-100 text-violet-500 hover:bg-violet-200 hover:text-violet-600 rounded-3xl',
		);

	return (
		<Panel>
			<Panel.Button
				className='bg-violet-100 text-violet-500 hover:bg-violet-200 h-[50px] w-[50px] rounded-3xl'
				onClick={() => toggleState()}
			>
				<Plus />
			</Panel.Button>
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
					className='bg-violet-100 text-violet-500 hover:bg-violet-200 w-[50px] h-[50px] rounded-3xl'
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
