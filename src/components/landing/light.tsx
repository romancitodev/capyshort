import { cn } from '@/lib/utils';
import React, { SVGAttributes } from 'react';

type Props = {} & SVGAttributes<SVGSVGElement>;

export function Light({ className }: Props) {
	return (
		<div
			className={cn('w-[555px] h-[555px] rounded-full blur-[200px]', className)}
		/>
	);
}
