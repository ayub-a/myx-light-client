import { PropsWithChildren, ReactNode } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './PageLayout.module.scss'

interface PageLayoutProps {
    sidebar: ReactNode
    loader?: ReactNode
}

export const PageLayout = ({ children, sidebar }: PropsWithChildren<PageLayoutProps>) => {
    return (
        <div className={clsnm(cls.PageLayout)}>
            <div className={cls.content}>
                <aside className={cls.aside}>{sidebar}</aside>
                <main className={cls.main}>{children}</main>
            </div>
        </div>
    )
}
