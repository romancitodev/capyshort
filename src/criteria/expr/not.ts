import { ICriteria, ICriteriaExpr } from '@/criteria';

export class NotCriteria<T> implements ICriteria<T> {
	constructor(private lhs: ICriteriaExpr<T>) {}
	match(candidate: T): boolean {
		return !this.lhs.match(candidate);
	}
}
