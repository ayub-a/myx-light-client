import { Suspense } from 'react'
import { Route } from 'react-router-dom'

import { User } from 'pages/User'
import { Cart } from 'pages/Cart'
import { PageNotFound } from 'pages'

import { Loader } from 'shared/ui'

import { mainNavigationRoutes } from '../config/mainNavigation'

export const NavigationRoutes = () => {
    return (
        <>
            <Route path="user" element={<User />} />

            <Route
                path="/cart"
                element={
                    <Suspense fallback={<Loader />}>
                        <Cart />
                    </Suspense>
                }
            />

            <Route
                path="*"
                element={
                    <Suspense fallback={<Loader />}>
                        <PageNotFound />
                    </Suspense>
                }
            />

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
