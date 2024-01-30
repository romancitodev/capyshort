import React, { SVGAttributes } from 'react';

type Props = {
	height?: string;
	width?: string;
} & SVGAttributes<SVGSVGElement>;

const DEFAULT_PROPS: Props = {
	height: '659',
	width: '1059',
};

export function Light({ height, width, className }: Props) {
	return (
		<svg
			width={width ?? DEFAULT_PROPS.width}
			height={height ?? DEFAULT_PROPS.height}
			viewBox='0 0 1059 516'
			className={className}
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>light</title>
			<g filter='url(#filter0_f_354_2599)'>
				<circle cx='529.5' cy='-13.5' r='329.5' fill-opacity='0.5' />
			</g>
			<defs>
				<filter
					id='filter0_f_354_2599'
					x='0'
					y='-543'
					width={width ?? DEFAULT_PROPS.width}
					height={width ?? DEFAULT_PROPS.width}
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='BackgroundImageFix'
						result='shape'
					/>
					<feGaussianBlur
						stdDeviation='100'
						result='effect1_foregroundBlur_354_2599'
					/>
				</filter>
			</defs>
		</svg>
	);
}
