import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react'
import { clsnm } from 'shared/lib/classNames'

import cls from './Button.module.scss'

type ButtonStyles = 'clear' | 'rounded' | 'square' | 'outline-rounded' | 'outline-square'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
	style?: ButtonStyles
	size?: 's' | 'm' | 'l'
}

export const Button = memo((props: PropsWithChildren<ButtonProps>) => {
	const { children = 'Children Empty', className = '', size = 'm', style = 'rounded', disabled, ...other } = props

	return (
		<button
			className={clsnm(cls.Button, [cls[style], cls[size], className], { [cls.disabled]: disabled })}
			{...other}
		>
			{children}
		</button>
	)
})
