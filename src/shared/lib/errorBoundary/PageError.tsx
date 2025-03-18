import { clsnm } from 'shared/lib/classNames'

import cls from './PageError.module.scss'

// interface PageErrorProps {}

export const PageError = () => {
    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={clsnm(cls.PageError, [], {})}>
            <h2>Something went wrong!</h2>
            <span>Plaese reload the page!</span>
            <button onClick={reloadPage}>Reload page</button>
        </div>
    )
}
