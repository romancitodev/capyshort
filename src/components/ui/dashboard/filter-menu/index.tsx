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
		<div className='grid h-min w-full bg-white rounded-xl p-6 gap-5'>
			{children}
		</div>
	);
}

FilterMenu.Header = Header;
FilterMenu.Footer = Footer;
FilterMenu.Content = Content;
FilterMenu.Field = Field;
FilterMenu.Sep = Separator;
