export enum MainNavigationRoutes {
    HOME = 'home',
    CONTACTS = 'contacts',
    ABOUT = 'about',
}

export const mainNavigationPaths: Record<MainNavigationRoutes, string> = {
    [MainNavigationRoutes.HOME]: '/',
    [MainNavigationRoutes.CONTACTS]: 'contacts',
    [MainNavigationRoutes.ABOUT]: 'about',
}

interface RouteConfig {
    name: MainNavigationRoutes
    path: (typeof mainNavigationPaths)[MainNavigationRoutes]
}

export const mainNavigationLinks: RouteConfig[] = Object.values(MainNavigationRoutes).map((route) => ({
    name: route,
    path: mainNavigationPaths[route],
}))
