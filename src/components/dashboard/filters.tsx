'use client';

import { ArrowDownAz, Filter, ArrowUpAz } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FilterMenu } from '@/components/ui/dashboard/filter-menu';
import { useLinks } from '@/store/links';

export function Filters({ ...props }: React.HtmlHTMLAttributes<HTMLElement>) {
	const { ordering, toggleOrdering, setFilter } = useLinks();

	return (
		<FilterMenu {...props}>
			<FilterMenu.Content>
				<FilterMenu.Field>
					<Input
						className=' bg-[hsla(259_52%_10%)] bg-opacity-30 h-full w-full rounded-lg border border-primary/30 ring-0 text-sm'
						placeholder='My cool alias'
						onChange={e => {
							setFilter(e.target.value);
						}}
					/>
				</FilterMenu.Field>
				<Separator />
				<FilterMenu.Field className='w-min gap-5'>
					<Button
						className='flex h-[35px] w-[35px] p-0 transition-colors bg-primary/50 border border-primary/75 text-white/75 rounded-xl'
						onClick={toggleOrdering}
					>
						{ordering === 'asc' ? <ArrowUpAz size='16' /> : <ArrowDownAz size='16' />}
					</Button>
					<Button className='flex h-[35px] w-[35px] p-0 transition-colors bg-primary/50 border border-primary/75 text-white/75 rounded-xl'>
						<Filter size='20' />
					</Button>
				</FilterMenu.Field>
			</FilterMenu.Content>
		</FilterMenu>
	);
}

function Separator() {
	return <span className=' min-w-0.5 h-6 bg-primary/50 rounded-full' />;
}
