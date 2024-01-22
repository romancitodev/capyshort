import { Link } from '@/lib/types';
import { create } from 'zustand';

interface LinkState {
	links: Link[];
	loading: boolean;
	addLink: (link: Link) => void;
	removeLink: (link: Link) => void;
	setLinks: (links: Link[]) => void;
}

export const useLinks = create<LinkState>(set => ({
	links: [],
	loading: true,
	removeLink: (link: Link) =>
		set(ctx => ({ links: ctx.links.filter(l => l.id !== link.id) })),
	addLink: (link: Link) => set(ctx => ({ links: ctx.links.concat(link) })),
	setLinks: (links: Link[]) => set(_ => ({ links, loading: false })),
}));
