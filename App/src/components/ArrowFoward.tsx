import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
interface props {
    props:any
}

export const ArrowForward = () => (
	<Svg
		width={24}
		height={24}
		fill='none'
	>
		<Path
			d='m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08'
			stroke='#323232'
			strokeWidth={1.5}
			strokeMiterlimit={10}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</Svg>
)
