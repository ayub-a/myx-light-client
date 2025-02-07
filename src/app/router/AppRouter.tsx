import { Suspense } from 'react'
import { Routes } from 'react-router-dom'

import { NavigationRoutes } from './ui/NavigationRoutes'
import { CategoryRoutes } from './ui/CategoryRoutes'
import { SearchByCarRoutes } from './ui/SearchByCarRoutes'

export const AppRouter = () => {
	return (
		<Suspense fallback={'Loding..'}>
			<Routes>
				{NavigationRoutes()}
				{CategoryRoutes()}
				{SearchByCarRoutes()}
			</Routes>
		</Suspense>
	)
}
