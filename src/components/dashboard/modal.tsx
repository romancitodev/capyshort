'use client';

import { Modal } from '@/components/modals';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UrlSchema, UrlType } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Scissors, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { useEffect, useState, useTransition } from 'react';
import { Session } from 'next-auth';
import { newUrl } from '@/actions/new-url';
import { Message, MessageType } from '../messages';
import { useModal } from '@/store/modal';
import { useLinks } from '@/store/links';
import { isActionResponse } from '@/lib/types';

type ModalButtonProps = {
	session: Session;
};

export function AddUrlModal({ session }: ModalButtonProps) {
	const { showModal, toggleState } = useModal();

	const { addLink } = useLinks();

	const form = useForm<UrlType>({
		resolver: zodResolver(UrlSchema),
		defaultValues: {
			url: '',
			name: '',
			custom_code: '',
		},
	});

	const [message, setMessage] = useState<{
		type: MessageType;
		content: string;
	}>();

	const [isPending, startTransition] = useTransition();

	const onSubmit = (data: UrlType) => {
		startTransition(async () => {
			setMessage(undefined);
			// biome-ignore lint/style/noNonNullAssertion: We check this in the layout.tsx
			const value = await newUrl(data, session.user!);
			if (isActionResponse(value)) {
				setMessage(value);
			} else {
				toggleState();
				addLink(value);
			}
		});
	};

	useEffect(() => {
		// This shit is always true btw but we evaluate it because React errors with the dependencies array.
		if (showModal) return form.reset({ url: '', name: '', custom_code: '' });
	}, [showModal, form]);

	return (
		showModal && (
			<Modal
				onClose={() => toggleState()}
				header={<h2 className='font-bold text-xl'>Short a new link</h2>}
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
						onSubmit={form.handleSubmit(onSubmit)}
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
								name='custom_code'
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
																.replaceAll(/[^a-zA-Z-]+/g, '-')
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
									<Scissors size='20' />
									<span>Short it!</span>
								</p>
							</Button>
						</div>
					</form>
				</Form>
			</Modal>
		)
	);
}
