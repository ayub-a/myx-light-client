import { ReactNode } from 'react'
import { ItemCategory } from 'pages'
import { categoryRoutePaths, CategoryRoutes } from 'shared/config/router/category'

interface RouteConfig {
	name: CategoryRoutes
	path: (typeof categoryRoutePaths)[CategoryRoutes]
	component: ReactNode
}

export const categoryRoutes: RouteConfig[] = Object.values(CategoryRoutes).map((route) => ({
	name: route,
	path: categoryRoutePaths[route],
	component: <ItemCategory />,
}))
