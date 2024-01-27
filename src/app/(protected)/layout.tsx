type Props = {
	children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
	return <div className='w-full h-full'>{children}</div>;
}
