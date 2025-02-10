// others
import location from 'shared/assets/icons/location.svg'
import language from 'shared/assets/icons/language.svg'
import shop from 'shared/assets/icons/shop.svg'
import burger from 'shared/assets/icons/burger.svg'
import wholesale from 'shared/assets/icons/wholesale.svg'
import arrowRight from 'shared/assets/icons/arrowRight.svg'
import localeTime from 'shared/assets/icons/localeTime.svg'

// main nav
import notification from 'shared/assets/icons/notification.svg'
import favourites from 'shared/assets/icons/favourite.svg'
import cart from 'shared/assets/icons/cart.svg'
import user from 'shared/assets/icons/user.svg'

import cls from './Icon.module.scss'

const icons = {
	location,
	language,
	localeTime,
	shop,
	burger,
	wholesale,
	arrowRight,
	notification,
	favourites,
	cart,
	user,
}

export interface IconProps {
	name: keyof typeof icons
	size?: number
	color?: string
}

export const Icon = ({ name, size = 19, color = 'currentColor' }: IconProps) => {
	const icon = name ? icons[name] : null

	return (
		<svg className={cls.Icon} data-icon={name} width={size} height={size} fill={color}>
			<use xlinkHref={`/icons.svg#${icon.id}`} />
		</svg>
	)
}
