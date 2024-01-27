import { MessageType } from '@/components/messages';
import { Link } from '@prisma/client';

export type ActionResponse = {
	type: MessageType;
	content: string;
};

export type Maybe<T> = T | null;

export function isNotNull<T>(value: Maybe<T>): value is T {
	return value !== null;
}

// User-defined type guard function
export function isActionResponse(value: unknown): value is ActionResponse {
	return (
		typeof value === 'object' &&
		value !== null &&
		'type' in value &&
		'content' in value
	);
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function isLink(value: any): value is Link {
	return (
		typeof value === 'object' &&
		value !== null &&
		'id' in value &&
		typeof value.id === 'string' &&
		'url' in value &&
		typeof value.url === 'string' &&
		'code' in value &&
		typeof value.code === 'string' &&
		'name' in value &&
		(typeof value.name === 'string' || value.name === null) &&
		'userId' in value &&
		(typeof value.userId === 'string' || value.userId === null) &&
		'views' in value &&
		typeof value.views === 'number' &&
		'createdAt' in value &&
		value.createdAt instanceof Date
	);
}
