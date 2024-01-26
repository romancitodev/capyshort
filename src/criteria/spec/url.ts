import { Criteria } from '@/criteria';

export class UrlCriteria<T> extends Criteria<T> {
	constructor(private keyword: string) {
		super();
	}

	match(candidate: T): boolean {
		if (typeof candidate === 'string') return this.keyword.includes(candidate);
		return false;
	}
}
