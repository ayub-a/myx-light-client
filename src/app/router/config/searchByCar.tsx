import { ReactNode } from 'react'
import { CarBody, CarBrand, CarModel, Product } from 'pages'
import { searchByCarRoutePaths, SearchByCarRoutes } from 'shared/config/router/searchByCar'

const routeComponents: Record<SearchByCarRoutes, ReactNode> = {
	[SearchByCarRoutes.BRAND]: <CarBrand />,
	[SearchByCarRoutes.MODEL]: <CarModel />,
	[SearchByCarRoutes.BODY]: <CarBody />,
	[SearchByCarRoutes.RESULT]: <Product />,
}

interface RouteConfig {
	name: SearchByCarRoutes
	path: (typeof searchByCarRoutePaths)[SearchByCarRoutes]
	component: ReactNode
}

export const searchByCarRoutes: RouteConfig[] = Object.values(SearchByCarRoutes).map((route) => ({
	name: route,
	path: searchByCarRoutePaths[route],
	component: routeComponents[route],
}))
