export enum CategoryRoutes {
	ADAPTERS = 'adapters',
	KSENON = 'ksenon',
	GABARIT = 'gabarit',
	GALOGEN = 'galogen',
	LED = 'led',
}

export const categoryRoutePaths: Record<CategoryRoutes, string> = {
	[CategoryRoutes.ADAPTERS]: `category/adapters`,
	[CategoryRoutes.KSENON]: `category/ksenon`,
	[CategoryRoutes.GABARIT]: `category/gabariti`,
	[CategoryRoutes.GALOGEN]: `category/galogen`,
	[CategoryRoutes.LED]: `category/led`,
}

interface RouteConfig {
	name: CategoryRoutes
	path: (typeof categoryRoutePaths)[CategoryRoutes]
}

export const categoryLinks: RouteConfig[] = Object.values(CategoryRoutes).map((route) => ({
	name: route,
	path: categoryRoutePaths[route],
}))
