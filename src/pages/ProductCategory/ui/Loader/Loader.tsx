import { clsnm } from 'shared/lib/classNames'

import cls from './Loader.module.scss'

// interface LoaderProps {}

export const Loader = () => {
    return (
        <div className={clsnm(cls.Loader, [], {})}>ProductCategoryLoader..</div>
    )
}
