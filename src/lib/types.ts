import { MessageType } from '@/components/messages';

export type Link = {
	id: string;
	url: string;
	code: string;
	name: string | null;
	userId: string | null;
	views: number;
	createdAt: Date;
};

export type Links = Link[];

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
