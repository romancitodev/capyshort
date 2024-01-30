import { LinkCreator } from '@/components/landing/link-creator';
import { auth } from './auth';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/landing/nav-bar';
import { Light } from '@/components/landing/light';
import { Card } from '@/components/landing/card';

export default async function Home() {
	const session = await auth();

	return (
		<main className='h-full flex flex-col items-center gap-52'>
			<Light className='absolute dark:text-light fill-current -z-10 w-min' />
			<SessionProvider session={session}>
				<Navbar />
			</SessionProvider>
			<div className='flex justify-center items-center'>
				<div className='flex flex-col items-center gap-y-24 w-[648px]'>
					<div className='flex flex-col gap-4 w-full items-center text-2xl md:text-[32px]'>
						<h1 className='font-semibold inline-flex gap-2 text-purple-100'>
							Short Your links for
							<span className='text-violet-300 font-extrabold [text-shadow:_0_0_16px_var(--tw-shadow-color)] shadow-purple-100/75'>
								Free
							</span>
						</h1>
						<h2 className='text-purple-100/75 font-normal text-xs md:text-sm'>
							Keep track of the links you share in real time
						</h2>
					</div>
					<SessionProvider session={session}>
						<LinkCreator />
					</SessionProvider>
				</div>
			</div>
			<div className='w-full px-5 pb-6 sm:px-0 h-full flex flex-col xl:flex-row gap-12 justify-between sm:w-[350px] md:w-[660px] xl:w-[926px] 2xl:w-[1200px]'>
				<Card
					title='Leading 2024'
					content='Constantly pushing boundaries, CapyShort is at the forefront of link
shortening innovation. From cutting-edge tools to community-driven
development, we\re shaping the industry and setting the benchmark for
others to follow.'
				/>
				<Card
					title='Leading 2024'
					content='Constantly pushing boundaries, CapyShort is at the forefront of link
shortening innovation. From cutting-edge tools to community-driven
development, we\re shaping the industry and setting the benchmark for
others to follow.'
				/>
				<Card
					title='Leading 2024'
					content='Constantly pushing boundaries, CapyShort is at the forefront of link
shortening innovation. From cutting-edge tools to community-driven
development, we\re shaping the industry and setting the benchmark for
others to follow.'
				/>
			</div>
		</main>
	);
}
