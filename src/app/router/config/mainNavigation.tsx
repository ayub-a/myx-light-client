import { ReactNode } from 'react'

import { About, Contacts } from 'pages'
import { Home } from 'pages'
import {
    mainNavigationPaths,
    MainNavigationRoutes,
} from 'shared/config/router/mainNavigation'
import { Loader } from 'shared/ui'

const routeComponents: Record<MainNavigationRoutes, ReactNode> = {
    [MainNavigationRoutes.HOME]: <Home />,
    [MainNavigationRoutes.CONTACTS]: <Contacts />,
    [MainNavigationRoutes.ABOUT]: <About />,
}

interface RouteConfig {
    name: MainNavigationRoutes
    path: (typeof mainNavigationPaths)[MainNavigationRoutes]
    component: ReactNode
    loader?: ReactNode
}

export const mainNavigationRoutes: RouteConfig[] = Object.values(
    MainNavigationRoutes
).map((route) => ({
    name: route,
    path: mainNavigationPaths[route],
    component: routeComponents[route],
    loader: <Loader />,
}))
