import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink'
import { Icon } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'

import { Counter } from 'units/Counter'

// interface SidebarProps {}

export const Sidebar = () => {
    return (
        <div>
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
            <Counter />
        </div>
    )
}
