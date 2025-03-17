import { lazy } from 'react'

// export const ProductCategoryLazy = lazy(() => import('./ProductCategory'))

// NOT FOR PRODUCTION
export const ProductCategoryLazy = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./ProductCategory')), 1500)
        }) as never
)
