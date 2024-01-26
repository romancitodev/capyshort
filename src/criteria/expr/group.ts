import { Criteria } from '@/criteria';

export class AndCriteria<T> extends Criteria<T> {
	constructor(private list: Criteria<T>[]) {
		super();
	}
	match(candidate: T): boolean {
		return this.list.every(item => item.match(candidate));
	}
}
