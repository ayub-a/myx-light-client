import { CustomLink } from 'shared/ui/CustomLink/CustomLink'
import { clsnm } from 'shared/lib/classNames'

import cls from './InfoNavigation.module.scss'

export const InfoNavigation = () => {
	return (
		<ul className={clsnm(cls.InfoNavigation)}>
			<li>
				<CustomLink to='/'>delivery</CustomLink>
			</li>
			<li>
				<CustomLink to='/contacts'>contacts</CustomLink>
			</li>
			<li>
				<CustomLink to='/about'>about</CustomLink>
			</li>
		</ul>
	)
}
