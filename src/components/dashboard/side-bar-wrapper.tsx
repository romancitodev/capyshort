'use client';

import { useModal } from '@/app/store/modal';
import { Session } from 'next-auth';
import { AddUrlModal } from './modal';
import { useEffect, useState } from 'react';
import { Maybe } from '@/lib/types';
import { createPortal } from 'react-dom';

type WrapperProps = {
	children: React.ReactNode;
	session: Session;
};

export function SidebarWrapper({ children, session }: WrapperProps) {
	const { showModal, toggleState } = useModal();
	const [element, setElement] = useState<Maybe<Element>>();

	useEffect(() => {
		setElement(document.querySelector('#add-url-modal'));
	}, []);

	return (
		<>
			{showModal &&
				createPortal(
					<AddUrlModal state={showModal} session={session} onToggle={toggleState} />,
					// biome-ignore lint/style/noNonNullAssertion: The element exists because we load it in the useEffect
					element!,
				)}
			{children}
		</>
	);
}
