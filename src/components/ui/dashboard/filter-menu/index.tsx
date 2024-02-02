import { Content } from './content';
import { Field } from './field';
import { Footer } from './footer';
import { Header } from './header';
import { Separator } from './separator';

type MenuProps = {
	children: React.ReactNode;
};

export function FilterMenu({ children }: MenuProps) {
	return (
		<div className='flex h-[54px] w-full bg-primary/20 rounded-xl justify-between px-2 py-3'>
			{children}
		</div>
	);
}

FilterMenu.Header = Header;
FilterMenu.Footer = Footer;
FilterMenu.Content = Content;
FilterMenu.Field = Field;
FilterMenu.Sep = Separator;
