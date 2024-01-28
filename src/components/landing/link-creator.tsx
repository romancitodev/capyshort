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
				const { code } = data;
				setMessage({
					type: 'info',
					content: `Url shortened! http://capyshort.dev/${code}`,
				});
			}
		});
	};
	return (
		<motion.div
			className='flex flex-col w-full rounded-3xl items-center gap-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col w-full bg-white shadow p-6 rounded-xl'
				>
					<div className='flex gap-5'>
						<FormField
							control={form.control}
							name='url'
							render={({ field }) => {
								return (
									<>
										<FormControl>
											<Input
												{...field}
												className='w-full h-[50px] transition-all ring-transparent bg-white'
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
							className='px-5 h-[50px] w-48 bg-violet-50 text-violet-500 hover:bg-violet-200 hover:text-violet-600'
						>
							Short it!
						</Button>
					</div>
				</form>
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
								{error && <Message type='error' content={error} />}
								{message && <Message {...message} />}
							</div>
						</motion.div>
					</div>
				</AnimatePresence>
			</Form>
		</motion.div>
	);
}
