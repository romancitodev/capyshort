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
				className='absolute z-10 w-full p-4 h-full backdrop-blur-md bg-black/30 flex items-center justify-center'
				initial={{ opacity: 0, position: 'fixed' }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
			>
				<motion.div
					className='w-full h-full flex justify-center items-center'
					initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					exit={{ y: 500, opacity: 0 }}
					ref={overlayRef}
				>
					<Card className='h-max w-max p-5 bg-card/25 backdrop-blur-md shadow-sm rounded-xl border-violet-500/25'>
						{header && <CardHeader>{header}</CardHeader>}
						<CardContent>{children}</CardContent>
						<CardFooter>{footer}</CardFooter>
					</Card>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
