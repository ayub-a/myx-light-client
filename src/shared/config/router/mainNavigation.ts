export enum MainNavigationRoutes {
	HOME = 'home',
	CONTACTS = 'contacts',
	ABOUT = 'about',
	SEARCH_BY_CAR = 'search by car',
}

export const mainNavigationPaths: Record<MainNavigationRoutes, string> = {
	[MainNavigationRoutes.HOME]: '/',
	[MainNavigationRoutes.CONTACTS]: 'contacts',
	[MainNavigationRoutes.ABOUT]: 'about',
	[MainNavigationRoutes.SEARCH_BY_CAR]: 'searchbycar/brand',
}

interface RouteConfig {
	name: MainNavigationRoutes
	path: (typeof mainNavigationPaths)[MainNavigationRoutes]
}

export const mainNavigationLinks: RouteConfig[] = Object.values(MainNavigationRoutes).map((route) => ({
	name: route,
	path: mainNavigationPaths[route],
}))
