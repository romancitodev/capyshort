'use client';
import { newUrl } from '@/actions/new-url';
import { Message, MessageType } from '@/components/messages';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { isActionResponse, isLink, isNotNull } from '@/lib/types';
import { UrlSchema, UrlType } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

export function LinkCreator() {
	const session = useSession();

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
			const data = await newUrl(e, session.data?.user ?? null);
			if (isNotNull(data) && isActionResponse(data)) setMessage(data);
			if (isNotNull(data) && isLink(data)) {
				setMessage({
					type: 'info',
					content: 'Added to clipboard!',
				});
			}
		});
	};
	return (
		<motion.div
			className='flex flex-col items-center px-5 sm:px-0 gap-5 w-full md:w-[522px] lg:w-[610px] xl:w-[690px]'
			initial={{ opacity: 0, y: 20 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col w-full gap-6'
				>
					<div className='flex flex-col sm:flex-row gap-5 w-full min-h-[34px] items-center'>
						<FormField
							control={form.control}
							name='url'
							render={({ field }) => {
								return (
									<>
										<FormControl>
											<Input
												{...field}
												className='w-full h-full transition-all ring-0 bg-primary/20 border border-primary/40 text-xs text-violet-50 placeholder:text-violet-50/50 rounded-xl'
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
							className='h-full px-5 py-2 w-full sm:w-20 bg-violet-400/95 backdrop-blur-lg text-xs md:text-md shadow-[0_0_16px_var(--tw-shadow-color)] shadow-violet-300/75'
						>
							Short
						</Button>
					</div>
					<AnimatePresence>
						<div className='w-full'>
							<motion.div
								className='w-full'
								key='message-error'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<div className='flex flex-col gap-6'>
									{error && <Message type='info' content={error} />}
									{message && <Message {...message} />}
								</div>
							</motion.div>
						</div>
					</AnimatePresence>
				</form>
			</Form>
		</motion.div>
	);
}
