import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { clsnm } from 'shared/lib/classNames'

import cls from './CustomLink.module.scss'

interface CustomLinkProps {
    to: string
    style?: 'clear' | 'underline'
    className?: string
}

export const CustomLink = ({
    to,
    children,
    style = 'underline',
    className,
}: PropsWithChildren<CustomLinkProps>) => {
    return (
        <Link
            to={to}
            className={clsnm(cls.CustomLink, [cls[style], className])}
        >
            {children}
        </Link>
    )
}
