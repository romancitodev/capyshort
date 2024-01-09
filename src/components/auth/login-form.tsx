'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { Login } from '@/components/icons/log-in';
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
				<p>
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
						className='text-violet-50 bg-violet-500 hover:bg-violet-600 disabled:bg-[#654D9D] disabled:text-violet-200 flex gap-x-2'
						type='submit'
						disabled={isPending}
					>
						<Login />
						Log in
					</CardButton>
				</form>
			</Form>
		</Card>
	);
}
