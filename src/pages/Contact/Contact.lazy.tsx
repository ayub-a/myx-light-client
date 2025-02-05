import { lazy } from 'react'

// export const ContactLazy = lazy(() => import('./Contact'))

// NOT FOR PRODUCTION
export const ContactLazy = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./Contact')), 1500)
		}) as any
)
