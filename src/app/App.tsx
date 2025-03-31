import { useEffect } from 'react'
import { useUnit } from 'effector-react'

import { authMeFx } from 'units/user'

import { useTheme } from 'shared/lib/theme'
import { clsnm } from 'shared/lib/classNames'

import { AppLayout } from './layout/AppLayout/AppLayout'
import { AppRouter } from './router'

import './styles/index.scss'

export const App = () => {
    const { theme } = useTheme()

    const authUser = useUnit(authMeFx)

    useEffect(() => {
        authUser()
    }, [])

    return (
        <AppLayout className={clsnm('App', [`theme_${theme}`])}>
            <AppRouter />
        </AppLayout>
    )
}
