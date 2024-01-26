import React, { useRef, useEffect } from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { AnimatePresence, motion, usePresence } from 'framer-motion';

type ModalProps = {
	onClose: () => void;
	header?: React.ReactNode;
	footer?: React.ReactNode;
	children: React.ReactNode;
};

export function Modal({ children, onClose, header, footer }: ModalProps) {
	const overlayRef = useRef<HTMLDivElement>(null);
	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (overlayRef.current && overlayRef.current === event.target) {
				!isPresent && setTimeout(safeToRemove, 200);
				onClose();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [onClose, isPresent, safeToRemove]);

	return (
		<AnimatePresence>
			<motion.div
				className='z-10 w-full h-full backdrop-blur-md bg-black/30 fixed flex justify-center items-center'
				initial={{ opacity: 0, position: 'fixed' }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
			>
				<motion.div
					className='w-full h-full fixed flex justify-center items-center'
					initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					exit={{ y: 500, opacity: 0 }}
					ref={overlayRef}
				>
					<Card className='absolute h-min w-max grid grid-flow-row gap-2 p-5 bg-white shadow-sm rounded-xl'>
						{header && <CardHeader>{header}</CardHeader>}
						<CardContent>{children}</CardContent>
						<CardFooter>{footer}</CardFooter>
					</Card>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
