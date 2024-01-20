import { ArrowDownAz, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Filters() {
	return (
		<div className='grid h-min w-full bg-white rounded-xl p-6 gap-5'>
			<p className='flex w-full font-semibold text-xl text-stone-900 justify-between'>
				Filter options
				<Filter />
			</p>
			<Input className='bg-transparent h-[50px]' placeholder='My cool alias' />
			<Separator />
			<div className='grid w-full gap-2'>
				<p className='flex w-full font-semibold text-lg text-stone-900 text-start'>
					Domain
				</p>
				<Input className='bg-transparent h-[50px]' placeholder='Google.com' />
			</div>
			<div className='flex w-full justify-between items-center'>
				<p className='flex w-full font-semibold text-lg text-stone-900 text-start'>
					Order By
				</p>
				<Button className='flex text-violet-400 bg-violet-100 hover:bg-violet-200 hover:text-violet-500 text-lg font-medium h-[50px] gap-5'>
					<ArrowDownAz size='20' />
					Ascendent
				</Button>
			</div>
			<p className='w-full font-medium text-sm text-neutral-500 text-center'>
				More options coming soon
			</p>
		</div>
	);
}

function Separator() {
	return <span className='w-full h-0.5 bg-neutral-700' />;
}
