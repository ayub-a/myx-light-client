import { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { mainNavigationRoutes } from '../config/mainNavigation'

export const NavigationRoutes = () => {
	return (
		<>
			{mainNavigationRoutes.map((route) => (
				<Route
					key={route.name}
					path={route.path}
					element={
						<Suspense key={route.name} fallback={route.loader}>
							{route.component}
						</Suspense>
					}
				/>
			))}
		</>
	)
}
