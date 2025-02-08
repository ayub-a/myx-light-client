import { Link } from 'react-router-dom'

import { clsnm } from 'shared/lib/classNames'

import cls from './InfoNavigation.module.scss'

export const InfoNavigation = () => {
	return (
		<ul className={clsnm(cls.InfoNavigation)}>
			<li>
				<Link to='/'>delivery</Link>
			</li>
			<li>
				<Link to='/'>contacts</Link>
			</li>
			<li>
				<Link to='/'>about</Link>
			</li>
		</ul>
	)
}
