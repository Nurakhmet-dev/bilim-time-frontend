import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/components/elemets/header'

import { Providers } from './providers'
import '@/assets/styles/globals.css'
import { APP_URL } from '@/config/url.config'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { cn } from '@/utils/tw-merge'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: { absolute: SITE_NAME, template: `%s | ${SITE_NAME}` },
	description: SITE_DESCRIPTION,
	metadataBase: APP_URL,
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['nurakhmet.dev@gmail.com']
	}
}

export default async function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	const locale = await getLocale()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={cn(geistSans.variable,'pt-16')}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}
