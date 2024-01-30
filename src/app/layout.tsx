import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/root/theme';

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export const metadata: Metadata = {
	title: 'Capy short',
	description: 'Keep track of the links you share in real time',
	openGraph: {
		type: 'website',
		url: 'https://capy-short.vercel.app/',
		title: 'Capy short',
		description: 'Keep track of the links you share in real time',
		images: '/public/capy-short.png',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'https://capy-short.vercel.app/',
		description: 'Keep track of the links you share in real time',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					poppins.className,
					'bg-background dark:bg-background px-5 overflow-x-hidden overflow-y-auto',
				)}
			>
				<script
					type='module'
					defer
					src='https://cdn.jsdelivr.net/npm/ldrs@1.0.1/dist/auto/ring.js'
				/>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
					<div id='add-url-modal' />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
