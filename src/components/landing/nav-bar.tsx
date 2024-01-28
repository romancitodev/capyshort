'use client';

import React from 'react';
import { Capybara } from '../icons/capybara';
import { Button } from '../ui/button';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export function Navbar() {
	const session = useSession();

	const user = session.data;

	return (
		<header className='sticky bg-zinc-100/50 flex flex-col transition-colors w-full items-center justify-center backdrop-blur-md'>
			<div className='flex w-full px-[448px] pb-2'>
				<div className='p-4 px-6 w-full flex justify-between items-center rounded-xl'>
					<Capybara width='50' height='60' />
					<div className='flex gap-6'>
						{user ? (
							<>
								<Button className='bg-transparent text-violet-500/60 hover:text-violet-600 hover:bg-transparent h-12 transition-all duration-300 w-20'>
									<Link href='/d'>Dashboard</Link>
								</Button>
								<Button
									className='bg-violet-500/95 text-violet-100 hover:bg-violet-600 h-12 transition-all duration-300 w-20'
									onClick={() => signOut()}
								>
									Log out
								</Button>
							</>
						) : (
							<>
								<Button className='bg-transparent text-violet-500/60 hover:text-violet-600 hover:bg-transparent h-12 transition-all duration-300 w-20'>
									<Link href='/register'>Register</Link>
								</Button>
								<Button className='bg-violet-500/95 text-violet-100 hover:bg-violet-600 h-12 transition-all duration-300 w-20'>
									<Link href='/login'>Login</Link>
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
			<span className='min-h-px bg-zinc-400/50 w-full' />
		</header>
	);
}
