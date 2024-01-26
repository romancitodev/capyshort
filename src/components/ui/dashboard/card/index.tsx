import { Button } from './button';
import { Content } from './content';
import { Header } from './header';
import { Image } from './image';
import { Views } from './views';

export function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-white rounded-3xl flex px-6 py-4 gap-5 h-[90px] min-w-48 items-center'>
			{children}
		</div>
	);
}

Card.Button = Button;
Card.Content = Content;
Card.Header = Header;
Card.Image = Image;
Card.Views = Views;
