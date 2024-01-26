import { Sidebar } from '@/components/dashboard/side-bar';
import { auth } from '@/app/auth';
import { SidebarWrapper } from '@/components/dashboard/side-bar-wrapper';
import { Capybara } from '@/components/icons/capybara';
import { Slot, SlotChildren, useSlot } from '@beqa/react-slots';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type NewType = Omit<HTMLButtonProps, 'children'>;

type Props = NewType & {
	children: SlotChildren<Slot<'header'> | Slot>;
};

export default async function Layout({ children }: Props) {
	const session = await auth();

	const { slot, hasSlot } = useSlot(children);

	console.log(hasSlot);

	if (!session || !session.user) return;

	return (
		<div className='flex flex-col w-full h-full p-6 bg-zinc-100 gap-7'>
			<div className='flex gap-10 h-min'>
				<div className='w-full h-[90px] flex bg-white rounded-3xl shadow'>
					<slot.header>
						<header className='flex w-full items-center gap-5 justify-center'>
							<Capybara height='50' width='42.1' />
							<span className='font-bold text-2xl text-violet-600'>Capyshort</span>
						</header>
					</slot.header>
				</div>
				<SidebarWrapper session={session}>
					<Sidebar />
				</SidebarWrapper>
			</div>
			<div className='flex w-full h-0.5 items-center justify-center'>
				<span className='bg-stone-900 w-full h-full' />
			</div>
			<div className='w-full h-min'>
				<slot.default />
			</div>
		</div>
	);
}
