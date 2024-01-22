'use client';

import { useLinks } from '@/app/store/links';
import { Link } from '@prisma/client';

import { useRef } from 'react';

export function StoreLinks({ links }: { links: Link[] }) {
	const initialize = useRef(false);

	if (!initialize.current) {
		useLinks.setState({ links, loading: false });
		initialize.current = true;
	}

	return null;
}
