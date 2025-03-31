import { useEffect, useState } from 'react'
import { useUnit } from 'effector-react'

import { AuthModal } from 'widgets/AuthModal'

import { $userStore } from 'units/user'

import { CustomLink, Icon } from 'shared/ui'

interface IAuthOrUserProps {
    className?: string
}

export const AuthOrUser = ({ className }: IAuthOrUserProps) => {
    const { isAuth } = useUnit($userStore)

    const [hasUser, setHasUser] = useState(isAuth)

    useEffect(() => {
        if (!isAuth) setHasUser(false)

        if (isAuth) {
            setTimeout(() => {
                setHasUser(true)
            }, 265)
        }
    }, [isAuth])

    if (!hasUser) return <AuthModal className={className} />

    return (
        <CustomLink style="clear" to="/user" className={className}>
            <Icon name="user" size={25} />
        </CustomLink>
    )
}
