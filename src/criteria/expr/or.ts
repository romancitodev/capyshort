import { Criteria, ICriteria, ICriteriaExpr } from '@/criteria';

export class OrCriteria<T> implements ICriteria<T> {
	constructor(
		private lhs: ICriteriaExpr<T>,
		private rhs: ICriteriaExpr<T>,
	) {}
	match(candidate: T): boolean {
		return this.lhs.match(candidate) || this.rhs.match(candidate);
	}
}
