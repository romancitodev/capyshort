import { Criteria } from '@/criteria';

export class NotCriteria<T> extends Criteria<T> {
	constructor(private lhs: Criteria<T>) {
		super();
	}
	match(candidate: T): boolean {
		return !this.lhs.match(candidate);
	}
}
