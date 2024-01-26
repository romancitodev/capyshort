import { UrlCriteria } from '@/criteria/spec/url';
import { NameCriteria } from '@/criteria/spec/name';
import { CustomCriteria } from '@/criteria/spec/_custom';

type Filters = { url?: string; name?: string };

export function filterUrls<T>(items: T[], filters: Filters) {
	const rules = new CustomCriteria(() => false);

	if (filters.url) {
		rules.or(new UrlCriteria(filters.url.trim()));
	}

	if (filters.name) {
		rules.or(new NameCriteria(filters.name.trim()));
	}

	return items.filter(item => rules.match(item));
}
