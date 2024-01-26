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
		<div className='flex h-min w-full bg-white rounded-3xl p-5 shadow  justify-between'>
			{children}
		</div>
	);
}

FilterMenu.Header = Header;
FilterMenu.Footer = Footer;
FilterMenu.Content = Content;
FilterMenu.Field = Field;
FilterMenu.Sep = Separator;
