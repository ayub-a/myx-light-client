import { Icon, ButtonLink } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'

// interface SidebarProps {}

export const Sidebar = () => {
    return (
        <div>
            <div className={clsnm(cls.Sidebar)}>
                <div className={cls.title_wrap}>
                    <h3>Search by car</h3>
                    <span>3 steps to upgrading your car`s lighting</span>
                </div>

                <div>
                    <ButtonLink to="/searchbycar/brand" className={cls.btn}>
                        Choose brand
                        <Icon name="arrowRight" />
                    </ButtonLink>

                    <span className={cls.notify_info}>* car database is updated every day</span>
                </div>
            </div>
        </div>
    )
}
