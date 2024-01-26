import {
	AndCriteria,
	AndNotCriteria,
	NotCriteria,
	OrCriteria,
	OrNotCriteria,
} from './expr';

export interface ICriteria<T> {
	match(candidate: T): boolean;
	and(rhs: ICriteria<T>): ICriteria<T>;
	or(rhs: ICriteria<T>): ICriteria<T>;
	andNot(rhs: ICriteria<T>): ICriteria<T>;
	orNot(rhs: ICriteria<T>): ICriteria<T>;
	not(): ICriteria<T>;
}

export abstract class Criteria<T> implements ICriteria<T> {
	abstract match(candidate: T): boolean;

	not(): ICriteria<T> {
		return new NotCriteria(this);
	}

	and(rhs: Criteria<T>): ICriteria<T> {
		return new AndCriteria(this, rhs);
	}

	or(rhs: ICriteria<T>): ICriteria<T> {
		return new OrCriteria(this, rhs);
	}

	andNot(rhs: ICriteria<T>): ICriteria<T> {
		return new AndNotCriteria(this, rhs);
	}

	orNot(rhs: ICriteria<T>): ICriteria<T> {
		return new OrNotCriteria(this, rhs);
	}
}
