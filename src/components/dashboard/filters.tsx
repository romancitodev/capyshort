'use client';

import { ArrowDownAz, Filter, ArrowUpAz } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FilterMenu } from '@/components/ui/dashboard/filter-menu';
import { useLinks } from '@/store/links';
import { Capybara } from '../icons/capybara';

export function Filters({ ...props }: React.HtmlHTMLAttributes<HTMLElement>) {
	const { ordering, toggleOrdering } = useLinks();

	return (
		<FilterMenu {...props}>
			<FilterMenu.Content>
				<FilterMenu.Field>
					<Input
						className='bg-transparent h-[50px] w-full rounded-xl'
						placeholder='My cool alias'
					/>
				</FilterMenu.Field>
				<FilterMenu.Field className='w-min'>
					<Button
						className='flex h-[50px] w-[50px] transition-colors text-stone-900 bg-stone-900/5 rounded-3xl hover:bg-stone-900/20 active:bg-stone-900/30'
						onClick={toggleOrdering}
					>
						{ordering === 'asc' ? <ArrowUpAz size='20' /> : <ArrowDownAz size='20' />}
					</Button>
					<Button className='flex text-violet-400 bg-violet-100 hover:bg-violet-200 hover:text-violet-500 text-lg font-medium h-[50px] gap-5 rounded-3xl'>
						<Filter size='20' />
					</Button>
				</FilterMenu.Field>
				<Separator />
				<FilterMenu.Field className='w-min'>
					<Capybara height='50' width='42.1' />
				</FilterMenu.Field>
			</FilterMenu.Content>
		</FilterMenu>
	);
}

function Separator() {
	return <span className=' min-w-0.5 h-7  bg-stone-900  rounded-full' />;
}
