export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='h-full flex items-center justify-center bg-gradient-to-r from-violet-200 to-violet-500'>
			{children}
		</main>
	);
}
