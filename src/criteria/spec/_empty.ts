import { Criteria } from '@/criteria';

//! ⚠ Warning. This criteria is just for internal usage.
export class EmptyCriteria<T> extends Criteria<T> {
	match(_: T): boolean {
		return true;
	}
}
