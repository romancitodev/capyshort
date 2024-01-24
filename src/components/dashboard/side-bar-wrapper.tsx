'use client';

import { Session } from 'next-auth';
import { AddUrlModal } from './add-modal';
import { useEffect, useState } from 'react';
import { Maybe } from '@/lib/types';
import { createPortal } from 'react-dom';

type WrapperProps = {
	children: React.ReactNode;
	session: Session;
};

export function SidebarWrapper({ children, session }: WrapperProps) {
	const [element, setElement] = useState<Maybe<Element>>();
	useEffect(() => {
		setElement(document.querySelector('#add-url-modal'));
	}, []);

	return (
		<>
			{element &&
				createPortal(
					<AddUrlModal session={session} />,
					// biome-ignore lint/style/noNonNullAssertion: The element exists because we load it in the useEffect
					element!,
				)}
			{children}
		</>
	);
}
