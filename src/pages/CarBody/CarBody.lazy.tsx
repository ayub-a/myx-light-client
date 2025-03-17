import { lazy } from 'react'

// export const CarBodyLazy = lazy(() => import('./CarBody'))

// NOT FOR PRODUCTION
export const CarBodyLazy = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./CarBody')), 500)
        }) as never
)
