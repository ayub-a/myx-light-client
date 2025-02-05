import { lazy } from 'react'

// export const MainLazy = lazy(() => import('./Main'))

// NOT FOR PRODUCTION
export const MainLazy = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./Main')), 1500)
		}) as any
)
