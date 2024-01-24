import { Link } from '@/lib/types';
import { create } from 'zustand';

interface LinkState {
	links: Link[];
	loading: boolean;
	addLink: (link: Link) => void;
	removeLink: (link: Pick<Link, 'id'>) => void;
	setLinks: (links: Link[]) => void;
	ordering: 'asc' | 'desc';
	toggleOrdering: () => void;
	filtering: boolean;
	toggleFiltering: () => void;
}

export const useLinks = create<LinkState>(set => ({
	links: [],
	loading: true,
	ordering: 'desc',
	filtering: false,
	removeLink: (link: Pick<Link, 'id'>) =>
		set(ctx => ({ links: ctx.links.filter(l => l.id !== link.id) })),
	addLink: (link: Link) => set(ctx => ({ links: ctx.links.concat(link) })),
	setLinks: (links: Link[]) => set(_ => ({ links, loading: false })),
	toggleOrdering: () =>
		set(ctx => ({ ordering: ctx.ordering === 'asc' ? 'desc' : 'asc' })),
	toggleFiltering: () => set(ctx => ({ filtering: !ctx.filtering })),
}));
