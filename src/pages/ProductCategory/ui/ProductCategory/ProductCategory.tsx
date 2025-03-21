import { useLocation, useParams } from 'react-router-dom'

import { PageLayout, CustomLink, GridLayout } from 'shared/ui'

import { Sidebar } from '../Sidebar/Sidebar'
import { ProductCategoryItem } from '../ProductCategoryItem/ProductCategoryItem'

import cls from './ProductCategory.module.scss'

const ProductCategory = () => {
    const { pathname } = useLocation()
    const { category } = useParams()

    return (
        <PageLayout sidebar={<Sidebar />}>
            <div className={cls.umbrella}></div>
            <h2 className={cls.category_title}>{category}</h2>

            <div className={cls.content}>
                <GridLayout col={3}>
                    {new Array(9).fill({ price: 45900, discount: 20 }).map((el, index) => (
                        <CustomLink
                            style="clear"
                            className={cls.custom_link}
                            key={index}
                            to={`${pathname}/${index + 1}`}
                        >
                            <ProductCategoryItem product={el} />
                        </CustomLink>
                    ))}
                </GridLayout>
            </div>
        </PageLayout>
    )
}

export default ProductCategory
