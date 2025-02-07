import { Link } from 'react-router-dom'
import { categoryLinks } from '../../config/router/category'

export const CategoryNavigation = () => {
	return (
		<div className='nav'>
			{categoryLinks.map(({ name, path }) => (
				<Link key={name} to={path}>
					{name}
				</Link>
			))}
		</div>
	)
}
