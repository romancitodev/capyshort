import {
	AndCriteria,
	AndNotCriteria,
	NotCriteria,
	OrCriteria,
	OrNotCriteria,
} from './expr';
export interface ICriteria<T> {
	match(candidate: T): boolean;
}

export interface ICriteriaExpr<T> extends ICriteria<T> {
	and(rhs: ICriteriaExpr<T>): ICriteria<T>;
	or(rhs: ICriteriaExpr<T>): ICriteria<T>;
	andNot(rhs: ICriteriaExpr<T>): ICriteria<T>;
	orNot(rhs: ICriteriaExpr<T>): ICriteria<T>;
	not(): ICriteria<T>;
}

export abstract class Criteria<T> implements ICriteriaExpr<T> {
	abstract match(candidate: T): boolean;

	not(): ICriteria<T> {
		return new NotCriteria(this);
	}

	and(rhs: ICriteriaExpr<T>): ICriteria<T> {
		return new AndCriteria(this, rhs);
	}

	or(rhs: ICriteriaExpr<T>): ICriteria<T> {
		return new OrCriteria(this, rhs);
	}

	andNot(rhs: ICriteriaExpr<T>): ICriteria<T> {
		return new AndNotCriteria(this, rhs);
	}

	orNot(rhs: ICriteriaExpr<T>): ICriteria<T> {
		return new OrNotCriteria(this, rhs);
	}
}
