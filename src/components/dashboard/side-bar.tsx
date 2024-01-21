'use client';

import { Panel } from '@/components/ui/dashboard/panel';
import { Capybara } from '@/components/icons/capybara';
import { BarChart2, Home, LogIn, Plus } from 'lucide-react';
import { useModal } from '@/hooks/modal';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { type Session } from 'next-auth';
import { AddUrlModal } from './modal';

type SidebarProps = {
	session: Session;
};

export function Sidebar({ session }: SidebarProps) {
	const { state, toggleState } = useModal();

	const pathname = usePathname();

	const style = (path: string) =>
		cn(
			'transition-colors',
			'flex justify-center items-center gap-x-2 w-full h-[50px]',
			pathname === path && 'bg-violet-500 text-violet-100 hover:bg-violet-600',
			pathname !== path &&
				'bg-violet-100 text-violet-500 hover:bg-violet-200 hover:text-violet-600',
		);

	return (
		<>
			{state && (
				<AddUrlModal session={session} state={state} onToggle={toggleState} />
			)}
			<Panel>
				<Panel.Header>
					<Capybara height='60' width='70' />
				</Panel.Header>
				<Panel.Div>
					<Panel.Button
						className='bg-violet-100 text-violet-500 hover:bg-violet-200 w-full h-[50px]'
						onClick={() => toggleState()}
					>
						<Plus />
					</Panel.Button>
				</Panel.Div>
				<Panel.Content>
					<Panel.Button className={style('/d')}>
						<Home size='20' />
						Home
					</Panel.Button>
					<Panel.Button className={style('/d/analytics')}>
						<BarChart2 size='20' />
						Analytics
					</Panel.Button>
				</Panel.Content>
				<Panel.Footer>
					<Panel.Button
						className='bg-violet-100 text-violet-500 hover:bg-violet-200 w-full h-[50px]'
						onClick={() => {
							signOut();
						}}
					>
						<LogIn size='20' />
					</Panel.Button>
				</Panel.Footer>
			</Panel>
		</>
	);
}
