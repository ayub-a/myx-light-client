// others
import location from 'shared/assets/icons/location.svg'
import language from 'shared/assets/icons/language.svg'
import shop from 'shared/assets/icons/shop.svg'
import burger from 'shared/assets/icons/burger.svg'
import wholesale from 'shared/assets/icons/wholesale.svg'
import arrowRight from 'shared/assets/icons/arrowRight.svg'
import localeTime from 'shared/assets/icons/localeTime.svg'
import emptyCategory from 'shared/assets/icons/emptyCategory.svg'
import search from 'shared/assets/icons/search.svg'
import addtocart from 'shared/assets/icons/addtocart.svg'
import info from 'shared/assets/icons/info.svg'
import confirmPromo from 'shared/assets/icons/confirmPromo.svg'

// badges
import completed from 'shared/assets/icons/completed.svg'
import warning from 'shared/assets/icons/warning.svg'
import boughthisweek from 'shared/assets/icons/boughthisweek.svg'
import car from 'shared/assets/icons/car.svg'
import discount from 'shared/assets/icons/discount.svg'

// main nav
import notification from 'shared/assets/icons/notification.svg'
import favourites from 'shared/assets/icons/favourite.svg'
import cart from 'shared/assets/icons/cart.svg'
import user from 'shared/assets/icons/user.svg'

// car light purposes

import { clsnm } from 'shared/lib/classNames'

import cls from './Icon.module.scss'

const icons = {
	search,
	location,
	language,
	localeTime,
	shop,
	burger,
	wholesale,
	arrowRight,
	notification,
	cart,
	user,
	emptyCategory,
	favourites,
	like: favourites,
	car,
	completed,
	boughthisweek,
	warning,
	discount,
	addtocart,
	info,
	confirmPromo,
}

export type Icons = keyof typeof icons

export interface IconProps {
	name: Icons
	size?: number
	color?: string
	className?: string
}

export const Icon = ({ name, size = 19, color = 'currentColor', className }: IconProps) => {
	const icon = name ? icons[name] : null

	return (
		<svg className={clsnm(cls.Icon, [className])} data-icon={name} width={size} height={size} fill={color}>
			<use xlinkHref={`/icons.svg#${icon.id}`} />
		</svg>
	)
}
