import { useLocation, useParams } from 'react-router-dom'

import { PageLayout, CustomLink, GridLayout } from 'shared/ui'

import { Loader } from '../Loader/Loader'
import { Sidebar } from '../Sidebar/Sidebar'
import { ProductCategoryItem } from '../ProductCategoryItem/ProductCategoryItem'

import cls from './ProductCategory.module.scss'

const ProductCategory = () => {
	const { pathname } = useLocation()
	const { category } = useParams()

	return (
		<PageLayout sidebar={<Sidebar />}>
			<h2 className={cls.category_title}>{category}</h2>

			<div className={cls.content}>
				<GridLayout col={3}>
					{new Array(9).fill(1).map((el, index) => (
						<CustomLink style='clear' key={index} to={`${pathname}/${index + 1}`}>
							<ProductCategoryItem />
						</CustomLink>
					))}
				</GridLayout>
			</div>
		</PageLayout>
	)
}

export default ProductCategory
