import { HTMLAttributes, PropsWithChildren } from 'react'
import { clsnm } from 'shared/lib/classNames'

import Location from 'shared/assets/icons/location.svg'
import Language from 'shared/assets/icons/language.svg'
import Shop from 'shared/assets/icons/shop.svg'
import Burger from 'shared/assets/icons/burger.svg'
import WholesaleIcon from 'shared/assets/icons/wholesale.svg'
import ArrowRight from 'shared/assets/icons/arrowRight.svg'

import cls from './Button.module.scss'

const icons = {
	location: Location,
	lang: Language,
	shop: Shop,
	burger: Burger,
	wholesale: WholesaleIcon,
	'arrow-right': ArrowRight,
}

type ButtonStyles = 'clear' | 'rounded' | 'square' | 'outline-rounded' | 'outline-square'

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'style'> {
	style?: ButtonStyles
	icon?: keyof typeof icons
	iconPos?: 'left' | 'right'
	size?: 's' | 'm' | 'l'
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
	const {
		children = 'Children Empty',
		className = '',
		size = 'm',
		style = 'rounded',
		icon,
		iconPos = 'left',
		...other
	} = props

	const IconComponent = icon ? icons[icon] : null

	return (
		<button data-icon={icon} className={clsnm(cls.Button, [cls[style], className, cls[size]])} {...other}>
			{icon && iconPos === 'left' ? <IconComponent /> : null}

			{children}

			{icon && iconPos === 'right' ? <IconComponent /> : null}
		</button>
	)
}
