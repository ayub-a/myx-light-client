import { PropsWithChildren } from 'react'
import { Icon } from 'shared/ui'

import ProductCategoryItemPng from 'shared/assets/productItem.png'

import { clsnm } from 'shared/lib/classNames'

import cls from './ProductCategoryItem.module.scss'

interface ProductCategoryItemProps {}

export const ProductCategoryItem = (props: PropsWithChildren<ProductCategoryItemProps>) => {
	return (
		<div className={clsnm(cls.ProductCategoryItem, [], {})}>
			<div className={cls.product_top_area}>
				<div className={cls.discount_and_like}>
					<div className={cls.discount}>-10%</div>
					<Icon name='like' />
				</div>

				<div className={cls.product_img_wrap}>
					<img src={ProductCategoryItemPng} alt='' />
				</div>
			</div>

			<div className={cls.product_about}>
				<h3 className={cls.product_title}>Габариты MYX T10, 16SMD, 2шт.</h3>
				<div className={cls.product_id}>Артикул: MYX020116</div>
				<div className={cls.product_price}>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'SUM', maximumFractionDigits: 0 }).format(45900)}</div>
			</div>
		</div>
	)
}
