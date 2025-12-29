import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

import { cn } from '@/utils/tw-merge'

interface ILogoProps {
	width: number | `${number}`
	className?: string
}

export const Logo: FC<ILogoProps> = ({ width, className }): ReactNode => (
	<Link href='/' className={cn('flex', className)}>
		<Image
			src='/images/logo.svg'
			alt='Bilim Time'
			width={width}
			height={0}
		/>
	</Link>
)
