import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUnit } from 'effector-react'

import { userLogout } from 'features/auth'

import { $userStore } from 'units/user'

import { clsnm } from 'shared/lib/classNames'
import { Button, Loader } from 'shared/ui'

import cls from './User.module.scss'

// interface UserProps {}

export const User = () => {
    const navigate = useNavigate()
    const logout = useUnit(userLogout)

    const { about_user, isAuth, isLoading } = useUnit($userStore)

    const logoutHandler = () => {
        logout()
    }

    useEffect(() => {
        if (!isAuth && !isLoading) navigate('/', { replace: true })
    }, [isAuth, isLoading])

    if (isLoading) return <Loader />

    return (
        <div className={clsnm(cls.User, [], {})}>
            <h2>USER PAGE - WIP</h2>

            <div>Name: {about_user?.name}</div>
            <div>E-mail: {about_user?.email}</div>

            <Button type="button" style="outline-rounded" onClick={logoutHandler} className={cls.logout_btn}>
                Logout
            </Button>
        </div>
    )
}
