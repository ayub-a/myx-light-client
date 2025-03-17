import { lazy } from 'react'

// export const AboutLazy = lazy(() => import('./About'))

// NOT FOR PRODUCTION
export const AboutLazy = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./About')), 1500)
        }) as never
)
