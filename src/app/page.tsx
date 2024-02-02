import { LinkCreator } from '@/components/landing/link-creator';
import { auth } from './auth';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from '@/components/landing/nav-bar';
import { Light } from '@/components/landing/light';
import { Card } from '@/components/landing/card';

export default async function Home() {
	const session = await auth();

	return (
		<main className='h-full w-full flex flex-col items-center gap-52 p-5'>
			<div className='absolute inset-0 -z-20 h-full w-full dark:bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]' />
			<Light className='absolute -top-1/4 dark:bg-light -z-10 w-4/5 lg:w-2/5' />
			<SessionProvider session={session}>
				<Navbar />
			</SessionProvider>
			<div className='flex justify-center items-center w-full sm:w-4/5'>
				<div className='flex flex-col items-center gap-y-24 w-full'>
					<div className='flex flex-col gap-4 w-full md:w-[648px] items-center text-2xl md:text-[32px]'>
						<h1 className='font-semibold inline-flex gap-2 text-purple-100'>
							Short Your links for
							<p className='text-violet-300 font-extrabold [text-shadow:_0_0_16px_var(--tw-shadow-color)] shadow-purple-100/75'>
								Free
							</p>
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
			<Light className='absolute top-[55%] md:top-[65%] dark:bg-light/65 -z-10 w-4/5 h-4/5 md:h-1/4 md:w-1/4' />
			<div className='w-full px-5 h-max lg:max-h-[300px] grid grid-flow-row xl:grid xl:grid-cols-3 gap-12 justify-between sm:w-[350px] md:w-[660px] xl:w-[926px] 2xl:w-[1200px]'>
				<Card
					title='Leading 2024'
					content='At the forefront of link shortening innovation, CapyShort leads with simplicity and user-friendliness. Our streamlined approach and commitment to a straightforward user experience set the industry standard. Join us as we shape the link management landscape and redefine simplicity.'
				/>
				<Card
					title='User-Friendly'
					content='Experience link shortening made simple with CapyShort. Our platform is dedicated to being exceptionally user-friendly, providing an intuitive interface and a hassle-free experience. From novices to experts, everyone can efficiently manage and share links effortlessly.'
				/>
				<Card
					title='Modern & Sleek Design'
					content='CapyShort combines modern aesthetics with user-friendly design for a refreshing link management experience. Navigate effortlessly through our sleek interface, backed by cutting-edge tools and community-driven development. Join us in setting the benchmark for simplicity in link shortening.'
				/>
			</div>
		</main>
	);
}
