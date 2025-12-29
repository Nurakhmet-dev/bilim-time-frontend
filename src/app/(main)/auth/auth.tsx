'use client'

import { FC, useState } from 'react'

import { LoginForm } from '@/components/features/auth/forms/login-form'
import { RegisterForm } from '@/components/features/auth/forms/register.form'

interface IAuthProps {}

export const Auth: FC<IAuthProps> = () => {
	const [isLogin, setIsLogin] = useState(true)

	return (
		<div className='flex h-screen items-center justify-center'>
			{isLogin && <LoginForm setIsLogin={setIsLogin} />}
			{!isLogin && <RegisterForm setIsLogin={setIsLogin} />}
		</div>
	)
}
