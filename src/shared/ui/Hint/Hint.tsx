import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './Hint.module.scss'

interface HintProps {
    text: string
    className?: string
    direction?: 'top' | 'bottom'
}

export const Hint = ({
    text,
    direction = 'top',
    className,
    children,
}: PropsWithChildren<HintProps>) => {
    return (
        <div className={cls.hint_wrap}>
            {text ? (
                <div
                    className={clsnm(cls.Hint, [className], {
                        [cls[`hint_${direction}`]]: !!direction,
                    })}
                >
                    {text}
                </div>
            ) : null}
            {children}
        </div>
    )
}
