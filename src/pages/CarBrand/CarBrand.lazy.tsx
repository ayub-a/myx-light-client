import { lazy } from 'react'

// export const CarBandLazy = lazy(() => import('./CarBrand'))

// NOT FOR PRODUCTION
export const CarBrandLazy = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./CarBrand')), 500)
		}) as any
)
