import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type ModalProps = {
	onClose: () => void;
	header?: React.ReactNode;
	footer?: React.ReactNode;
	children: React.ReactNode;
};

export function Modal({ children, onClose, header, footer }: ModalProps) {
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (overlayRef.current && overlayRef.current === event.target) {
				onClose();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [onClose]);

	return (
		<div
			ref={overlayRef}
			className='w-full h-full fixed bg-black/30 backdrop-blur-md flex justify-center items-center'
		>
			<Card className='absolute h-min w-max grid grid-flow-row gap-2 p-5 bg-violet-50 shadow-sm rounded-xl'>
				{header && <CardHeader>{header}</CardHeader>}
				<CardContent>{children}</CardContent>
				<CardFooter>{footer}</CardFooter>
			</Card>
		</div>
	);
}
