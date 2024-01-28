type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return <div className='w-full h-full'>{children}</div>;
}
