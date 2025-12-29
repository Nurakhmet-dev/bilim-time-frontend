import type { Metadata } from 'next'

import { Auth } from './auth'

export const metadata: Metadata = {
	//title: async () => 'await '
}

export default function AuthPage() {
	return (
		<>
			<Auth />
		</>
	)
}
