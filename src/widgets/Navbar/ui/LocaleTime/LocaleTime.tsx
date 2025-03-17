import { Icon } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import cls from './LocaleTime.module.scss'

export const LocaleTime = () => {
    return (
        <div className={clsnm(cls.LocaleTime)}>
            <Icon name="localeTime" />
            <span>16:06</span>
        </div>
    )
}
