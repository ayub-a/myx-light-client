import { Suspense } from 'react'
import { Route } from 'react-router-dom'

import { Product } from 'pages'
import { categoryRoutes } from '../config/category'

export const CategoryRoutes = () => {
	return (
		<>
			{categoryRoutes.map((route) => (
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

			{categoryRoutes.map((route) => (
				<Route key={route.name} path={`/${route.path}/:model`} element={<Product />} />
			))}
		</>
	)
}
