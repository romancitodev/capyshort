import { Button } from './button';
import { Content } from './content';
import { Header } from './header';
import { Image } from './image';
import { Views } from './views';

export function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-white rounded-xl flex flex-1 px-4 py-2 gap-5 max-h-[75px] min-w-48 shadow-md items-center'>
			{children}
		</div>
	);
}

Card.Button = Button;
Card.Content = Content;
Card.Header = Header;
Card.Image = Image;
Card.Views = Views;
