// App imports
import { SVGWrapper } from './svg';

export const Bars = ({ innerWidth, innerHeight }: any) => {
	return (
		<SVGWrapper>
			<svg>
				<rect
					x={0}
					width={innerWidth* 0.36}
					height={innerHeight}
					strokeWidth={0}
					fill="rgba(102, 187, 106, 1)"
					style={{cursor: "pointer"}}
				/>
				<rect
					x={innerWidth* 0.36}
					width={innerWidth - innerWidth* 0.36}
					height={innerHeight}
					strokeWidth={0}
					fill="rgba(255, 193, 7, 1)"
					style={{cursor: "pointer"}}
				/>
			</svg>
		</SVGWrapper>
	)
}

Bars.displayName="Bars";