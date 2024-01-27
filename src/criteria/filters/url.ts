import { UrlCriteria } from '@/criteria/spec/url';
import { NameCriteria } from '@/criteria/spec/name';
import { Maybe } from '@/lib/types';
import { Criteria } from '@/criteria';

type Filters = { url?: string; name?: string };

export function filterUrls<T>(items: T[], filters: Filters) {
	let rules: Maybe<Criteria<T>> = null;

	if (filters.url) {
		rules = new UrlCriteria(filters.url.trim()) as Criteria<T>;
	}

	if (filters.name) {
		const rule = new NameCriteria(filters.name.trim()) as Criteria<T>;
		rules = !rules ? rule : (rules.or(rule) as Criteria<T>);
	}

	return rules ? items.filter(item => rules?.match(item)) : items;
}
