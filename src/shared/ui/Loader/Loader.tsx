import { clsnm } from 'shared/lib/classNames'

import cls from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={clsnm(cls.loader_container)}>
            <span className={cls.Loader}></span>
        </div>
    )
}
