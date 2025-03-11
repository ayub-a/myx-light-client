export enum SearchByCarRoutes {
	BRAND = 'brand',
	MODEL = 'model',
	BODY = 'body',
	// RESULT = 'result',
}

export const searchByCarRoutePaths: Record<SearchByCarRoutes, string> = {
	[SearchByCarRoutes.BRAND]: `/searchbycar/brand`,
	[SearchByCarRoutes.MODEL]: `/searchbycar/:brand`,
	[SearchByCarRoutes.BODY]: `/searchbycar/:brand/:model`,
}

export const searchByCarResultPath = { result: `/searchbycar/:brand/:model/:body/:gen` }
