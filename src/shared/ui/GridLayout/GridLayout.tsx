import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './GridLayout.module.scss'

interface GridLayoutProps {
    col?: 3 | 4
}

export const GridLayout = ({
    children,
    col = 4,
}: PropsWithChildren<GridLayoutProps>) => {
    return (
        <div className={clsnm(cls.GridLayout, [cls[`col-${col}`]])}>
            {children}
        </div>
    )
}
