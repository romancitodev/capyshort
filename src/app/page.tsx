import { LinkCreator } from '@/components/landing/link-creator';
import { auth } from './auth';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/landing/nav-bar';

export default async function Home() {
	const session = await auth();

	return (
		<main className='w-full h-full flex flex-col items-center p-2 gap-52'>
			<SessionProvider session={session}>
				<Navbar />
			</SessionProvider>
			<div className='flex justify-center items-center'>
				<div className='flex flex-col items-center gap-y-16 w-[648px]'>
					<div className='flex flex-col gap-4 w-full items-center'>
						<h1 className='text-5xl font-semibold inline-flex gap-2'>
							Short Your links for
							<span className='text-violet-600 font-extrabold'>Free</span>
						</h1>
						<h2 className='text-stone-600 font-normal text-lg'>
							Keep track of the links you share in real time
						</h2>
					</div>
					<SessionProvider session={session}>
						<LinkCreator />
					</SessionProvider>
				</div>
			</div>
		</main>
	);
}
