'use client';

import { Modal } from '@/components/modals';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StrictUrlSchema, StrictUrlType } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { useEffect, useState, useTransition } from 'react';
import { Message, MessageType } from '@/components/messages';
import { useModal } from '@/store/edit-modal';
import { useLinks } from '@/store/links';
import { isActionResponse } from '@/lib/types';
import { Link } from '@prisma/client';
import { editUrl } from '@/actions/edit-url';

type ModalButtonProps = {} & Pick<Link, 'url' | 'code' | 'name' | 'id'>;

export function EditUrlModal({ url, code, name, id }: ModalButtonProps) {
	const { showModal, toggleState } = useModal();

	const { editLink } = useLinks();

	const form = useForm<StrictUrlType>({
		resolver: zodResolver(StrictUrlSchema),
		defaultValues: {
			url,
			name,
			code,
		},
	});

	const [message, setMessage] = useState<{
		type: MessageType;
		content: string;
	}>();

	const [isPending, startTransition] = useTransition();

	const onSubmit = (data: StrictUrlType) => {
		startTransition(async () => {
			setMessage(undefined);
			const value = await editUrl({ id, ...data, changed: data.code !== code });
			if (isActionResponse(value)) {
				setMessage(value);
			} else {
				toggleState();
				editLink({ id, ...data });
			}
		});
	};

	useEffect(() => {
		// This shit is always true btw but we evaluate it because React errors with the dependencies array.
		if (showModal) return form.reset({ url, name, code });
	}, [showModal, form, url, name, code]);

	return (
		showModal && (
			<Modal
				onClose={() => toggleState()}
				header={<h2 className='font-bold text-xl'>Edit the link</h2>}
				footer={
					<div className=' text-violet-600 text-sm flex h-full w-full gap-x-2'>
						<Sparkles size='20' />
						<p className='text-zinc-600'>
							Only <span className='font-bold'>pro</span> subscribers can use these
							features.
						</p>
					</div>
				}
			>
				<Form {...form}>
					<form
						className='grid grid-flow-row gap-5'
						onSubmit={form.handleSubmit(onSubmit, console.log)}
					>
						<FormField
							control={form.control}
							name='url'
							render={({ field }) => (
								<FormItem className='flex w-full flex-col gap-2'>
									Url to short
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder='https://youtube.com/...'
											className='bg-transparent'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='grid grid-flow-col grid-cols-2 gap-x-5'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => {
									return (
										<FormItem className='flex w-full flex-col'>
											<p className='flex gap-x-2 text-start items-center'>
												Name <span className='text-zinc-500 text-sm'>optional</span>
											</p>
											<FormControl>
												<Input
													{...field}
													disabled={isPending}
													value={field.value ?? ''}
													placeholder='Rick roll'
													className='bg-transparent'
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							<FormField
								control={form.control}
								name='code'
								render={({ field }) => {
									return (
										<FormItem className='flex w-full flex-col'>
											<p className='text-violet-600 flex items-center gap-x-2'>
												<span className='text-zinc-950'>Custom code</span>
												<Sparkles size='20' />
											</p>
											<Input
												{...field}
												value={
													field.value
														? field.value
																.replaceAll(/[^a-zA-Z-0-9	]+/g, '-')
																.replaceAll(' ', '-')
																.replaceAll(/(\-+)/g, '-')
														: ''
												}
												disabled={isPending}
												placeholder='your-awesome-code'
												className='bg-transparent'
											/>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
						</div>
						{message && <Message {...message} />}
						<div className='flex w-full h-full'>
							<Button
								className='w-full h-[50px] bg-violet-100 text-violet-500 hover:bg-violet-200 hover:text-violet-600'
								disabled={isPending}
								type='submit'
							>
								<p className='text-violet-600 flex items-center gap-x-2'>
									<Check size='20' />
									<span>Confirm</span>
								</p>
							</Button>
						</div>
					</form>
				</Form>
			</Modal>
		)
	);
}
