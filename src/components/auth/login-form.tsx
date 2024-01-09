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

import React from 'react';
import Card from '@/components/auth/card';
import Input from '@/components/auth/card/input';
import { LoginSchema, type LoginType } from '@/schemas';
import { CardButton } from './card/button';
import { Login } from '@/components/icons/log-in';

export function LoginForm() {
	const form = useForm<LoginType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

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
					onSubmit={form.handleSubmit(data => {
						console.log(data);
					})}
				>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => {
							return (
								<FormItem>
									<FormControl>
										<Input {...field} hint='Username' placeholder='Romandev' />
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
					<CardButton
						className='text-violet-50 bg-violet-500 hover:bg-violet-600 flex gap-x-2'
						type='submit'
					>
						<Login />
						Log in
					</CardButton>
				</form>
			</Form>
		</Card>
	);
}
