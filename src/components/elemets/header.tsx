'use client'

import Link, { LinkProps } from 'next/link'

import { useScrollDirection } from '@/hooks/useScrollDirection'

import { cn } from '@/utils/tw-merge'

import { Button } from '../ui/button'
import { Logo } from '../ui/logo'

import { PUBLIC_URL } from '@/config/url.config'
import { ModeToggle } from '../ui/toggle-theme'

const HeaderRoutes: { href: LinkProps['href']; name: string }[] = [
	{
		href: PUBLIC_URL.home(),
		name: 'Home'
	},
	{
		href: PUBLIC_URL.courses(),
		name: 'Courses'
	}
]

export const Header = () => {
	const scrollDirection = useScrollDirection()

	return (
		<header
			className={cn(
				scrollDirection === 'down'
					? 'header--hidden'
					: 'header--visible',
                    'py-3 bg-background border-b-2 border-b-primary'
			)}
			style={{
				position: 'fixed',
				top: 0,
				width: '100%',
				transition: 'transform 0.3s ease-in-out',
				// В 2025 году transform — самый быстрый способ скрыть элемент без пересчета макета (reflow)
				transform:
					scrollDirection === 'down'
						? 'translateY(-100%)'
						: 'translateY(0)'
			}}
		>
			<div className='container flex items-center justify-between'>
				<Logo width={200} />
				<nav className='flex items-center gap-2'>
					{HeaderRoutes.map(url => (
						<Link key={url.name} href={url.href}>
							{url.name}
						</Link>
					))}

					<Button>
						<Link href='/auth'>Login</Link>
					</Button>
				</nav>
				<ModeToggle />
			</div>
		</header>
	)
}
