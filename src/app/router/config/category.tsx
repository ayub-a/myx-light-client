import { ReactNode } from 'react'
import {
    categoryRoutePaths,
    CategoryRoutes,
} from 'shared/config/router/category'
import { Loader } from 'shared/ui'

interface RouteConfig {
    name: CategoryRoutes
    path: (typeof categoryRoutePaths)[CategoryRoutes]
    loader?: ReactNode
}

export const categoryRoutes: RouteConfig[] = Object.values(CategoryRoutes).map(
    (route) => ({
        name: route,
        path: categoryRoutePaths[route],
        loader: <Loader />,
    })
)
