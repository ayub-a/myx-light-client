import { Link } from 'react-router-dom'
import { mainNavigationLinks } from '../../config/router/mainNavigation'

export const MainNavigation = () => {
	return (
		<div className='nav'>
			{mainNavigationLinks.map(({ name, path }) => (
				<Link key={name} to={path}>
					{name}
				</Link>
			))}
		</div>
	)
}
