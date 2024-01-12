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
import { RegisterSchema, type RegisterType } from '@/schemas';
import { CardButton } from '@/components/auth/card/button';
import { Message, MessageType } from '@/components/messages';
import { register } from '@/actions/register';
import { LogIn, Eye, EyeOff } from 'lucide-react';

export function RegisterForm() {
	const form = useForm<RegisterType>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			check_password: '',
		},
	});

	const [message, setMessage] = useState<{
		type: MessageType;
		content: string;
	}>();

	const [viewPassword, setView] = useState(false);
	const [viewCheck, setViewCheck] = useState(false);

	const [isPending, startTransition] = useTransition();

	const onSubmit = (data: RegisterType) => {
		startTransition(() => {
			register(data).then(data => {
				console.log(data);
				if (!data) return;
				setMessage(data);
			});
		});
	};

	return (
		<Card
			href='/login'
			back={
				<p>
					Have an account already? <span className='font-bold'>Login here</span>
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
						name='email'
						render={({ field }) => {
							return (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											hint='Email'
											placeholder='roman@dev.com'
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
										<div className='grid grid-flow-col items-end gap-5 w-full transition-all justify-between'>
											<Input
												{...field}
												hint='Password'
												placeholder='********'
												type={viewPassword ? 'text' : 'password'}
												disabled={isPending}
												className='h-[50px] transition-all w-[450px] rounded-xl'
											/>
											<CardButton
												type='button'
												className='bg-violet-50 text-violet-500 w-[75px] hover:bg-violet-100'
												onClick={() => setView(state => !state)}
											>
												{viewPassword ? <Eye /> : <EyeOff />}
											</CardButton>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					<FormField
						control={form.control}
						name='check_password'
						render={({ field }) => {
							return (
								<FormItem>
									<FormControl>
										<div className='grid grid-flow-col items-end gap-5 w-full transition-all justify-between'>
											<Input
												{...field}
												hint='Repeat your password'
												placeholder='********'
												type={viewCheck ? 'text' : 'password'}
												disabled={isPending}
												className='h-[50px] transition-all w-[450px]  rounded-xl'
											/>
											<CardButton
												type='button'
												className='bg-violet-50 text-violet-500 w-[75px] hover:bg-violet-100'
												onClick={() => setViewCheck(state => !state)}
											>
												{viewPassword ? <Eye /> : <EyeOff />}
											</CardButton>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
					{message && <Message {...message} />}
					<CardButton
						className='text-violet-50 bg-violet-500 hover:bg-violet-600 flex gap-x-2'
						type='submit'
						disabled={isPending}
					>
						<LogIn size='20' />
						Create an account
					</CardButton>
				</form>
			</Form>
		</Card>
	);
}
