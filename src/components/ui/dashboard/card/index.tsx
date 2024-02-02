import { Button } from './button';
import { Content } from './content';
import { Header } from './header';
import { Image } from './image';
import { Views } from './views';

export function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-url-card/50 ring-0 border border-url-ring/75 rounded-xl grid sm:flex px-6 py-4 gap-5 h-max sm:h-[90px] w-full items-center'>
			{children}
		</div>
	);
}

Card.Button = Button;
Card.Content = Content;
Card.Header = Header;
Card.Image = Image;
Card.Views = Views;
