import { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { searchByCarRoutes } from '../config/searchByCar'

export const SearchByCarRoutes = () => {
	return (
		<>
			{searchByCarRoutes.map((route) => (
				<Route
					key={route.name}
					path={route.path}
					element={
						<Suspense key={route.name} fallback={'Loding..'}>
							{route.component}
						</Suspense>
					}
				/>
			))}
		</>
	)
}
