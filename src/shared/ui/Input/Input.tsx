import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react'

import { Icon } from '../Icon/Icon'
import { clsnm } from 'shared/lib/classNames'

import cls from './Input.module.scss'

type HtmlInputProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'value' | 'type' | 'className' | 'placeholder'>

interface InputProps extends HtmlInputProps {
    onChange?: (value: string) => void
    icon?: boolean
}

export const Input = (props: PropsWithChildren<InputProps>) => {
    const { type = 'text', value, onChange, icon, ...otherProps } = props

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={clsnm(cls.Input, [], { [cls.icon]: icon })}>
            <input onChange={changeHandler} type={type} value={value} {...otherProps} />
            {icon ? <Icon name="search" /> : null}
        </div>
    )
}
