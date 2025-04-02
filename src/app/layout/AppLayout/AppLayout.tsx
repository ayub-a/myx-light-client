import { ReactNode } from 'react'

import { Navbar } from 'widgets/Navbar'
import { clsnm } from 'shared/lib/classNames'

import cls from './AppLayout.module.scss'

interface AppLayoutProps {
    children: ReactNode
    className?: string
}

export const AppLayout = ({ children, className }: AppLayoutProps) => {
    return (
        <div className={clsnm(cls.AppLayout, [className])}>
            <Navbar />

            <div className={cls.container}>{children}</div>

            {/* <Foote/> */}
        </div>
    )
}
