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

import React, { useState } from 'react';
import Card from '@/components/auth/card';
import Input from '@/components/auth/card/input';
import { RegisterSchema, type RegisterType } from '@/schemas';
import { CardButton } from './card/button';
import { Login } from '@/components/icons/log-in';
import { Eye } from '../icons/eye';
import { Message } from '../messages';

export function RegisterForm() {
	const form = useForm<RegisterType>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const [viewPassword, setView] = useState(false);
	const [viewCheck, setViewCheck] = useState(false);

	return (
		<Card
			href='/login'
			back={
				<p>
					Don't have an account? <span className='font-bold'>Register here</span>
				</p>
			}
		>
			<Form {...form}>
				<form
					className='grid gap-y-6 w-full'
					onSubmit={form.handleSubmit(
						data => {
							console.log(data);
						},
						errors => console.log(errors),
					)}
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
						name='email'
						render={({ field }) => {
							return (
								<FormItem>
									<FormControl>
										<Input {...field} hint='Email' placeholder='roman@dev.com' />
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
												className='h-[50px] transition-all w-[450px]'
											/>
											<CardButton
												type='button'
												className='bg-violet-50 text-violet-500 w-[75px] hover:bg-violet-100'
												onClick={() => setView(state => !state)}
											>
												<Eye variant={viewPassword ? 'open' : 'closed'} />
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
												className='h-[50px] transition-all w-[450px]'
											/>
											<CardButton
												type='button'
												className='bg-violet-50 text-violet-500 w-[75px] hover:bg-violet-100'
												onClick={() => setViewCheck(state => !state)}
											>
												<Eye variant={viewCheck ? 'open' : 'closed'} />
											</CardButton>
										</div>
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
						Create an account
					</CardButton>
				</form>
			</Form>
		</Card>
	);
}
