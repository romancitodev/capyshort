import { ArrowDownAz, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FilterMenu } from '@/components/ui/dashboard/filter-menu';

export function Filters() {
	return (
		<FilterMenu>
			<FilterMenu.Header>
				Filter Options
				<Filter />
			</FilterMenu.Header>
			<FilterMenu.Content>
				<FilterMenu.Field variant='row'>
					<Input className='bg-transparent h-[50px]' placeholder='My cool alias' />
				</FilterMenu.Field>
				<FilterMenu.Sep />
				<FilterMenu.Field variant='grid'>
					<p className='flex w-full font-semibold text-lg text-stone-900 text-start'>
						Domain
					</p>
					<Input className='bg-transparent h-[50px]' placeholder='Google.com' />
				</FilterMenu.Field>
				<FilterMenu.Field>
					<p className='flex w-full font-semibold text-lg text-stone-900 text-start'>
						Order By
					</p>
					<Button className='flex text-violet-400 bg-violet-100 hover:bg-violet-200 hover:text-violet-500 text-lg font-medium h-[50px] gap-5'>
						<ArrowDownAz size='20' />
						Ascendent
					</Button>
				</FilterMenu.Field>
			</FilterMenu.Content>
			<FilterMenu.Footer>More options coming soon</FilterMenu.Footer>
		</FilterMenu>
	);
}
