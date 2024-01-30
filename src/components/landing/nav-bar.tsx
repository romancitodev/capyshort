'use client';

import React from 'react';
import { Capybara } from '../icons/new-capy-logo';
import { Button } from '../ui/button';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { Sun } from 'lucide-react';

export function Navbar() {
	const session = useSession();

	const user = session.data;

	return (
		<header className='sticky bg-primary/15 rounded-xl py-2 px-3 h-14 top-5 z-10 flex transition-colors items-center justify-between backdrop-blur-md xl:w-[926px] lg:w-[820px] md:w-[658px] sm:w-[450px] w-full'>
			<Capybara />
			<div className='inline-flex items-center gap-5 h-[36px]'>
				<div className='inline-flex gap-2'>
					{user ? (
						<>
							<Button variant='ghost'>
								<Link href='/d'>Dashboard</Link>
							</Button>
							<Button onClick={() => signOut()}>Log out</Button>
						</>
					) : (
						<>
							<Button variant='ghost'>
								<Link href='/register'>Register</Link>
							</Button>
							<Button className=' bg-primary/75 hover:bg-primary'>
								<Link href='/login'>login</Link>
							</Button>
						</>
					)}
				</div>
				<Button className='h-[36px] w-[36px] p-2 text-white bg-pr-button/30 rounded-xl border-pr-button/50 border hover:bg-pr-button/40'>
					<Sun />
				</Button>
			</div>
		</header>
	);
}
