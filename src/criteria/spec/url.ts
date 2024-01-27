import { Criteria } from '@/criteria';
import { isLink } from '@/lib/types';

export class UrlCriteria<T> extends Criteria<T> {
	constructor(private keyword: string) {
		super();
	}

	match(candidate: T): boolean {
		if (isLink(candidate)) return candidate.url.includes(this.keyword);
		return false;
	}
}
