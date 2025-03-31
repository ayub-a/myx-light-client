import { Suspense } from 'react'
import { Routes } from 'react-router-dom'

import { Loader } from 'shared/ui'

import { NavigationRoutes } from './ui/NavigationRoutes'
import { CategoryRoutes } from './ui/CategoryRoutes'
import { SearchByCarRoutes } from './ui/SearchByCarRoutes'

export const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {NavigationRoutes()}
                {CategoryRoutes()}
                {SearchByCarRoutes()}
            </Routes>
        </Suspense>
    )
}
