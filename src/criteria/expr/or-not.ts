import { type ICriteria } from '@/criteria';

export class OrNotCriteria<T> implements ICriteria<T> {
	constructor(
		private lhs: ICriteria<T>,
		private rhs: ICriteria<T>,
	) {}
	match(candidate: T): boolean {
		return this.lhs.match(candidate) || !this.rhs.match(candidate);
	}
}
