'use client'

import { useTranslations } from 'use-intl'

export default function Home() {
	const t = useTranslations('home')

	return (
		<>
			<div className='container h-200'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 flex gap-6 justify-around bg-primary/30 rounded-2xl py-6 px-6'>
				<div className='w-full h-50 rounded-xl bg-pink-500/50'></div>
				<div className='w-full h-50 rounded-xl bg-pink-500/50'></div>
				<div className='w-full h-50 rounded-xl bg-pink-500/50'></div>
				<div className='w-full h-50 rounded-xl bg-pink-500/50'></div>
				<div className='w-full h-50 rounded-xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
			<div className='container mt-4 h-60'>
				<div className='h-full rounded-2xl bg-pink-500/50'></div>
			</div>
		</>
	)
}
