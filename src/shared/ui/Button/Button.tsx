import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { clsnm } from 'shared/lib/classNames'

import cls from './Button.module.scss'

type ButtonStyles = 'clear' | 'rounded' | 'square' | 'outline-rounded' | 'outline-square'

type HtmlButtonPtops = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'className' | 'type'>
export interface ButtonProps extends HtmlButtonPtops {
    style?: ButtonStyles
    size?: 's' | 'm' | 'l'
    ref?: React.RefObject<HTMLButtonElement>
}

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
    const { children = 'Children Empty', className = '', size = 'm', style = 'rounded', disabled, ...other } = props

    return (
        <button
            ref={ref}
            disabled={disabled}
            className={clsnm(cls.Button, [cls[style], cls[size], className], {
                [cls.disabled]: disabled,
            })}
            {...other}
        >
            {children}
        </button>
    )
})
