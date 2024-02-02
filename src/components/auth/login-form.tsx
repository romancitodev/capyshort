'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type {} from 'ldrs';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';

import React, { useState, useTransition } from 'react';
import Card from '@/components/auth/card';
import Input from '@/components/auth/card/input';
import { LoginSchema, type LoginType } from '@/schemas';
import { CardButton } from './card/button';
import { LogIn } from 'lucide-react';
import { login } from '@/actions/login';
import { Message, type MessageType } from '@/components/messages';

export function LoginForm() {
	const form = useForm<LoginType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const [message, setMessage] = useState<{
		type: MessageType;
		content: string;
	}>();
	const [isPending, startTransition] = useTransition();

	const onSubmit = (data: LoginType) => {
		startTransition(() => {
			setMessage(undefined);
			login(data).then(data => {
				if (!data) return;
				setMessage(data);
			});
		});
	};

	return (
		<Card
			href='/register'
			back={
				<p className='text-xs md:text-base w-full text-wrap text-white/75'>
					Don't have an account? <span className='font-bold'>Register here</span>
				</p>
			}
		>
			<Form {...form}>
				<form
					className='grid gap-y-6 w-full'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => {
							return (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											hint='Username'
											placeholder='Romandev'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => {
							return (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											hint='Password'
											placeholder='********'
											type='password'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					{message && <Message {...message} />}
					<CardButton
						className='text-violet-50 h-[34px] disabled:bg-[#654D9D] disabled:text-violet-200 flex gap-x-2 bg-violet-600/15 text-sm p-5 border border-violet-500/50'
						type='submit'
						disabled={isPending}
					>
						{isPending ? (
							<l-ring size='20' stroke='2' color='#F3F1FF' />
						) : (
							<LogIn size='20' />
						)}
						Log in
					</CardButton>
				</form>
			</Form>
		</Card>
	);
}
