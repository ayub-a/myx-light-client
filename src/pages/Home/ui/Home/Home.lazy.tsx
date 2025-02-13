import { lazy } from 'react'

// export const MainLazy = lazy(() => import('./Main'))

// NOT FOR PRODUCTION
export const HomeLazy = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./Home')), 1500)
		}) as any
)
