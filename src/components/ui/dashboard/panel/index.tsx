import React from 'react';
import { Button } from './button';
import { Content } from './content';
import { Div } from './div';
import { Footer } from './footer';
import { Header } from './header';

export function Panel({ children }: { children: React.ReactNode[] }) {
	const [head, ...tail] = children;
	return (
		<aside className='flex rounded-xl min-h-[54px] max-h-[54px] px-3 w-full xl:w-1/2 2xl:w-2/6 bg-primary/30 items-center gap-6'>
			{head}
			{tail.map((item, index) => {
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: In this case, the map is constant, so we now what are we talking about
					<React.Fragment key={index}>
						<Separator />
						{item}
					</React.Fragment>
				);
			})}
		</aside>
	);
}

Panel.Button = Button;
Panel.Content = Content;
Panel.Footer = Footer;
Panel.Header = Header;
Panel.Div = Div;

function Separator() {
	return <span className=' min-w-0.5 h-6 bg-primary/50 rounded-full' />;
}
