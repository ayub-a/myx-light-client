import { lazy } from 'react'

// export const ProductLazy = lazy(() => import('./Product'))

// NOT FOR PRODUCTION
export const ProductLazy = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./Product')), 1500)
		}) as any
)
