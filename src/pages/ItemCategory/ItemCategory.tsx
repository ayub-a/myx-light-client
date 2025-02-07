import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const ItemCategory = () => {
	const { pathname } = useLocation()

	const category = pathname?.split('/')[2]

	return (
		<div>
			Category: {category}
			<div className='nav'>
				{new Array(5).fill(1).map((el, index) => (
					<Link key={index} to={`${pathname}/${index + 1}`}>
						product: {index + 1}
					</Link>
				))}
			</div>
			<Outlet />
		</div>
	)
}

export default ItemCategory
