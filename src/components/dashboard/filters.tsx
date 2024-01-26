'use client';

import { ArrowDownAz, Filter, ArrowUpAz } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FilterMenu } from '@/components/ui/dashboard/filter-menu';
import { useLinks } from '@/store/links';

export function Filters({ ...props }: React.HtmlHTMLAttributes<HTMLElement>) {
	const { ordering, toggleOrdering } = useLinks();

	return (
		<FilterMenu {...props}>
			<FilterMenu.Content>
				<FilterMenu.Field>
					<Input
						className='bg-transparent h-[50px] w-[1130px] rounded-xl'
						placeholder='My cool alias'
					/>
				</FilterMenu.Field>
				<FilterMenu.Field className='w-min'>
					<Button
						className='flex h-[50px] w-[50px] text-stone-900 bg-stone-900/5 rounded-3xl'
						onClick={toggleOrdering}
					>
						{ordering === 'asc' ? <ArrowUpAz size='20' /> : <ArrowDownAz size='20' />}
					</Button>
					<Button className='flex text-violet-400 bg-violet-100 hover:bg-violet-200 hover:text-violet-500 text-lg font-medium h-[50px] gap-5 rounded-3xl'>
						<Filter size='20' />
					</Button>
				</FilterMenu.Field>
			</FilterMenu.Content>
		</FilterMenu>
	);
}
