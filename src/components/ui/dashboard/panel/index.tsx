import React from 'react';
import { Button } from './button';
import { Content } from './content';
import { Div } from './div';
import { Footer } from './footer';
import { Header } from './header';

export function Panel({ children }: { children: React.ReactNode[] }) {
	const [head, ...tail] = children;
	return (
		<aside className='rounded-3xl h-[90px] w-2/6  p-5 flex bg-white shadow items-center justify-between'>
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
	return <span className=' min-w-0.5 h-7  bg-stone-900  rounded-full' />;
}
