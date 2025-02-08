import { Link } from 'react-router-dom'

import NotificationIcon from 'shared/assets/icons/notification.svg'
import FavouriteIcon from 'shared/assets/icons/favourite.svg'
import CartIcon from 'shared/assets/icons/cart.svg'
import UserIcon from 'shared/assets/icons/user.svg'

import { clsnm } from 'shared/lib/classNames'

import cls from './MainNavigation.module.scss'

export const MainNavigation = () => {
	return (
		<ul className={clsnm(cls.MainNavigation)}>
			<li>
				<Link to='/'>
					<NotificationIcon />
				</Link>
			</li>
			<li>
				<Link to='/'>
					<FavouriteIcon />
				</Link>
			</li>
			<li>
				<Link to='/'>
					<CartIcon />
				</Link>
			</li>
			<li>
				<Link to='/'>
					<UserIcon />
				</Link>
			</li>
		</ul>
	)
}
