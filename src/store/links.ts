import { Link } from '@prisma/client';
import { create } from 'zustand';

interface LinkState {
	links: Link[];
	loading: boolean;
	addLink: (link: Link) => void;
	removeLink: (link: Pick<Link, 'id'>) => void;
	setLinks: (links: Link[]) => void;
	editLink: (link: Partial<Link>) => void;
	ordering: 'asc' | 'desc';
	toggleOrdering: () => void;
	filter?: string;
	setFilter: (f: string) => void;
}

export const useLinks = create<LinkState>(set => ({
	links: [],
	loading: true,
	ordering: 'desc',
	removeLink: (link: Pick<Link, 'id'>) =>
		set(ctx => ({ links: ctx.links.filter(l => l.id !== link.id) })),
	addLink: (link: Link) => set(ctx => ({ links: ctx.links.concat(link) })),
	setLinks: (links: Link[]) => set(_ => ({ links, loading: false })),
	toggleOrdering: () =>
		set(ctx => ({ ordering: ctx.ordering === 'asc' ? 'desc' : 'asc' })),
	editLink: link => {
		set(ctx => ({
			links: ctx.links.map(l => (l.id === link.id ? { ...l, ...link } : l)),
		}));
	},
	setFilter: f => set(_ => ({ filter: f })),
}));
