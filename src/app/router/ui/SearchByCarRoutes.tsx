import { Suspense } from 'react'
import { Route } from 'react-router-dom'

import { SearchByCar } from 'pages'
import { SearchByCarResult } from 'pages/SearchByCarResult'

import { searchByCarResulRoute, searchByCarRoutes } from '../config/searchByCar'

export const SearchByCarRoutes = () => {
    return (
        <>
            <Route path="searchbycar" element={<SearchByCar />}>
                {searchByCarRoutes.map((route) => (
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
            </Route>

            <Route
                path={searchByCarResulRoute.path}
                element={
                    <Suspense key={searchByCarResulRoute.name} fallback={searchByCarResulRoute.loader}>
                        <SearchByCarResult />
                    </Suspense>
                }
            />
        </>
    )
}
