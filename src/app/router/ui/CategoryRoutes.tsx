import { Suspense } from 'react'
import { Navigate, Route } from 'react-router-dom'

import { ProductCategory } from 'pages'
import { Product } from 'pages/Product'

import { categoryRoutes } from '../config/category'
import { Loader } from 'shared/ui'

export const CategoryRoutes = () => {
    return (
        <>
            <Route
                path="category"
                element={<Navigate to="/category/adapters" replace />}
            />
            <Route
                path="category/:category"
                element={
                    <Suspense fallback={<Loader />}>
                        <ProductCategory />
                    </Suspense>
                }
            />

            {categoryRoutes.map((route) => (
                <Route
                    key={route.name}
                    path={`/${route.path}/:model`}
                    element={
                        <Suspense key={route.name} fallback={route.loader}>
                            <Product />
                        </Suspense>
                    }
                />
            ))}
        </>
    )
}

{
    /* {categoryRoutes.map((route) => (
					<Route
						key={route.name}
						path={route.path}
						element={
							<Suspense key={route.name} fallback={route.loader}>
								{route.component}
							</Suspense>
						}
					/>
				))} */
}
