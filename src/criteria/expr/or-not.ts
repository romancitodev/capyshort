import { Criteria } from '@/criteria';

export class OrNotCriteria<T> extends Criteria<T> {
	constructor(
		private lhs: Criteria<T>,
		private rhs: Criteria<T>,
	) {
		super();
	}
	match(candidate: T): boolean {
		return this.lhs.match(candidate) || !this.rhs.match(candidate);
	}
}
