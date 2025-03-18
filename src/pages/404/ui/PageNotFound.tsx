import { clsnm } from 'shared/lib/classNames'

import cls from './PageNotFound.module.scss'

// interface PageNotFoundProps {}

export const PageNotFound = () => {
    return (
        <div className={clsnm(cls.PageNotFound, [], {})}>
            <h2>Page not found</h2>
        </div>
    )
}
