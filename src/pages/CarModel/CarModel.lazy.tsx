import { lazy } from 'react'

// export const CarModelLazy = lazy(() => import('./CarModel'))

// NOT FOR PRODUCTION
export const CarModelLazy = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./CarModel')), 500)
        }) as never
)
