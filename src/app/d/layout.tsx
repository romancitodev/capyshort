'use client';

import { Sidebar } from '@/components/dashboard/side-bar';
import { Modal } from '@/components/modals';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useModal } from '@/hooks/modal';
import { Scissors, Sparkles } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
	const { state, toggleState } = useModal();

	return (
		<div className='h-full flex flex-row'>
			{state && (
				<Modal
					onClose={() => toggleState()}
					header={<h2 className='font-bold text-xl'>Short a new link</h2>}
					footer={
						<div className=' text-violet-600 text-sm flex h-full w-full gap-x-2'>
							<Sparkles size='20' />
							<p className='text-zinc-600'>
								Only <span className='font-bold'>pro</span> subscribers can use this
								features.
							</p>
						</div>
					}
				>
					<div className='grid grid-flow-row gap-5'>
						<div className='flex w-full flex-col gap-2'>
							Name of your shortened link
							<Input placeholder='Rick roll' />
						</div>
						<div className='grid grid-flow-col grid-cols-2 gap-x-5'>
							<div className='flex w-full flex-col gap-2'>
								Url
								<Input placeholder='https://youtube.com/...' />
							</div>
							<div className='flex w-full flex-col gap-2'>
								<p className='text-violet-600 flex items-center gap-x-2'>
									<span className='text-zinc-950'>Custom code</span>
									<Sparkles size='20' />
								</p>
								<Input placeholder='your-awesome-code' />
							</div>
						</div>
						<div className='flex w-full h-full'>
							<Button
								className='w-full h-[50px] bg-violet-100 text-violet-500 hover:bg-violet-200 hover:text-violet-600'
								type='submit'
							>
								<p className='text-violet-600 flex items-center gap-x-2'>
									<Scissors size='20' />
									<span>Short it!</span>
								</p>
							</Button>
						</div>
					</div>
				</Modal>
			)}
			<Sidebar onModal={() => toggleState()} />
			{children}
		</div>
	);
}
