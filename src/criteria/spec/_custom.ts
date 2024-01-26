import { Criteria } from '@/criteria';

//! ⚠ Warning. This criteria is just for internal usage.
export class CustomCriteria<T> extends Criteria<T> {
	constructor(private op: () => boolean) {
		super();
	}
	match(_: T): boolean {
		return this.op();
	}
}
