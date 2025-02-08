import { HTMLAttributes, PropsWithChildren } from 'react'
import { clsnm } from 'shared/lib/classNames'

import Location from 'shared/assets/icons/location.svg'
import Language from 'shared/assets/icons/language.svg'
import Shop from 'shared/assets/icons/shop.svg'
import Burger from 'shared/assets/icons/burger.svg'

import cls from './Button.module.scss'

const icons = {
	location: Location,
	lang: Language,
	shop: Shop,
	burger: Burger,
}

type ButtonStyles = 'clear' | 'rounded' | 'square' | 'outline-rounded' | 'outline-square'

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'style'> {
	style?: ButtonStyles
	icon?: keyof typeof icons
	iconPos?: 'left' | 'right'
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
	const { children = 'Children Empty', className = '', style = 'rounded', icon, iconPos = 'left', ...other } = props

	const IconComponent = icon ? icons[icon] : null

	return (
		<button className={clsnm(cls.Button, [cls[style], className])} {...other}>
			{icon && iconPos === 'left' ? <IconComponent /> : null}

			{children}

			{icon && iconPos === 'right' ? <IconComponent /> : null}
		</button>
	)
}
