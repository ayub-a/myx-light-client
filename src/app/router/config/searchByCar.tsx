import { ReactNode } from 'react'
import { CarBody, CarBrand, CarModel, Product } from 'pages'
import { searchByCarRoutePaths, SearchByCarRoutes } from 'shared/config/router/searchByCar'
import { Loader } from 'shared/ui'

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
	loader?: ReactNode
}

export const searchByCarRoutes: RouteConfig[] = Object.values(SearchByCarRoutes).map((route) => ({
	name: route,
	path: searchByCarRoutePaths[route],
	component: routeComponents[route],
	loader: <Loader />,
}))
