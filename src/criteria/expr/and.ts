import { ICriteria, ICriteriaExpr } from '@/criteria';

export class AndCriteria<T> implements ICriteria<T> {
	constructor(
		private lhs: ICriteriaExpr<T>,
		private rhs: ICriteriaExpr<T>,
	) {
		// super();
	}
	match(candidate: T): boolean {
		return this.lhs.match(candidate) && this.rhs.match(candidate);
	}
}
