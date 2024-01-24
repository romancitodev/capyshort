'use client';
import { newUrl } from '@/actions/new-url';
import { Message, MessageType } from '@/components/messages';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { isActionResponse, isNotNull } from '@/lib/types';
import { UrlSchema, UrlType } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

export function LinkCreator() {
	const [isPending, startTransition] = useTransition();
	const [message, setMessage] = useState<{
		type: MessageType;
		content: string;
	}>();

	const form = useForm<UrlType>({
		resolver: zodResolver(UrlSchema),
		defaultValues: {
			custom_code: '',
			name: '',
			url: '',
		},
	});

	const error = form.formState.errors?.url?.message || null;

	const onSubmit = (e: UrlType) => {
		startTransition(async () => {
			const data = await newUrl(e, null);
			if (isNotNull(data) && isActionResponse(data)) setMessage(data);
		});
	};
	return (
		<motion.div
			className='fixed w-full h-full flex flex-row items-center justify-center'
			initial={{ opacity: 0, y: 20 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-5'
				>
					<div className='flex w-full gap-x-5 items-center justify-center'>
						<FormField
							control={form.control}
							name='url'
							render={({ field }) => {
								return (
									<>
										<FormControl>
											<Input
												{...field}
												className='w-max h-[50px]'
												placeholder='https://youtube.com/...'
												disabled={isPending}
											/>
										</FormControl>
									</>
								);
							}}
						/>
						<Button
							type='submit'
							disabled={isPending}
							className='px-5 h-[50px] bg-violet-50 text-violet-500  hover:bg-violet-200 hover:text-violet-600'
						>
							Short it!
						</Button>
					</div>
					<AnimatePresence>
						<div>
							<motion.div
								className='w-full'
								key='message-error'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{!message && error && <Message type='error' content={error} />}
								{!error && message && <Message {...message} />}
							</motion.div>
						</div>
					</AnimatePresence>
				</form>
			</Form>
		</motion.div>
	);
}
