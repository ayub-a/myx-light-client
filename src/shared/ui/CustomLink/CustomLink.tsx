import { ComponentProps, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { clsnm } from 'shared/lib/classNames'

import cls from './CustomLink.module.scss'

interface CustomLinkProps extends Omit<ComponentProps<typeof Link>, 'style'> {
    style?: 'clear' | 'underline'
}

export const CustomLink = ({
    to,
    children,
    style = 'underline',
    className,
    ...otherProps
}: PropsWithChildren<CustomLinkProps>) => {
    return (
        <Link to={to} className={clsnm(cls.CustomLink, [cls[style], className])} {...otherProps}>
            {children}
        </Link>
    )
}
