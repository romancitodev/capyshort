import { Star } from 'lucide-react';

type CardProps = {
	title: string;
	content: string;
};

export function Card({ title, content }: CardProps) {
	return (
		<div className='flex flex-col p-5 gap-3 bg-primary/10 border border-primary/50 rounded-xl h-full backdrop-blur-lg'>
			<div className='inline-flex gap-2 font-medium text-lg items-center'>
				<Star size='20' /> {title}
			</div>
			<p className='text-md text-white/70 font-normal'>{content}</p>
		</div>
	);
}
