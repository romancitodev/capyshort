import { Criteria } from '@/criteria';
import { isLink } from '@/lib/types';

export class NameCriteria<T> extends Criteria<T> {
	constructor(private keyword: string) {
		super();
	}

	match(candidate: T): boolean {
		if (isLink(candidate)) {
			const { name, url } = candidate;
			if (name) return name.includes(this.keyword);
			if (url) return url.includes(this.keyword);
		}
		return false;
	}
}
