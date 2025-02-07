import { lazy } from 'react'

// export const ItemCategoryLazy = lazy(() => import('./ItemCategory'))

// NOT FOR PRODUCTION
export const ItemCategoryLazy = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./ItemCategory')), 1500)
		}) as any
)
