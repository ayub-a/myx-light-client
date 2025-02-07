import { ReactNode } from 'react'
import { About, CarBrand, Contacts, Main } from 'pages'
import { mainNavigationPaths, MainNavigationRoutes } from 'shared/config/router/mainNavigation'

const routeComponents: Record<MainNavigationRoutes, ReactNode> = {
	[MainNavigationRoutes.HOME]: <Main />,
	[MainNavigationRoutes.CONTACTS]: <Contacts />,
	[MainNavigationRoutes.ABOUT]: <About />,
	[MainNavigationRoutes.SEARCH_BY_CAR]: <CarBrand />,
}

interface RouteConfig {
	name: MainNavigationRoutes
	path: (typeof mainNavigationPaths)[MainNavigationRoutes]
	component: ReactNode
}

export const mainNavigationRoutes: RouteConfig[] = Object.values(MainNavigationRoutes).map((route) => ({
	name: route,
	path: mainNavigationPaths[route],
	component: routeComponents[route],
}))
