import { clsnm } from 'shared/lib/classNames'

import cls from './Loader.module.scss'

interface ILoaderProps {
    className?: string
}

export const Loader = ({ className }: ILoaderProps) => {
    return (
        <div className={clsnm(cls.loader_container, [className])}>
            <span className={cls.Loader}></span>
        </div>
    )
}
