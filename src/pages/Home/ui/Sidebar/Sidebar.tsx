import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink'
import { Icon } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'

// interface SidebarProps {}

export const Sidebar = () => {
    return (
        <div className={clsnm(cls.Sidebar)}>
            <div className={cls.title_wrap}>
                <h3>Search by car</h3>
                <span>3 steps to upgrading your car`s lighting</span>
            </div>

            <ButtonLink to="/searchbycar/brand" className={cls.btn}>
                Choose brand
                <Icon name="arrowRight" />
            </ButtonLink>
        </div>
    )
}
