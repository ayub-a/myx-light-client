import { PropsWithChildren } from 'react'
import { Icon } from 'shared/ui'

import ProductCategoryItemPng from 'shared/assets/productItem.png'

import { clsnm } from 'shared/lib/classNames'

import cls from './ProductCategoryItem.module.scss'
import { priceFormatter } from 'shared/lib/priceFormatter'

interface ProductCategoryItemProps {
    product: {
        discount: number
        price: number
    }
}

export const ProductCategoryItem = ({ product }: PropsWithChildren<ProductCategoryItemProps>) => {
    return (
        <div
            className={clsnm(cls.ProductCategoryItem, [], {
                out_of_stock: !product.price,
            })}
        >
            <div className={cls.product_top_area}>
                <div className={cls.discount_and_like}>
                    {product.discount && product.price ? (
                        <div className={cls.discount}>-{product.discount}%</div>
                    ) : (
                        <div></div>
                    )}
                    <Icon name="like" size={26} />
                </div>

                <div className={cls.product_img_wrap}>
                    <img src={ProductCategoryItemPng} alt="" />
                </div>
            </div>

            <div className={cls.product_about}>
                <h3 className={cls.product_title}>Габариты MYX T10, 16SMD, 2шт.</h3>
                <div className={cls.product_id}>Артикул: MYX020116</div>

                {product.price ? (
                    <div className={cls.product_price_wrap}>
                        {product.discount ? (
                            <div className={cls.product_price_with_discount}>
                                {priceFormatter.defaultPrice(product.price, 'SUM')}
                            </div>
                        ) : null}
                        <div className={cls.product_price}>
                            {priceFormatter.priceWithDiscount(product.price, 20, 'SUM')}
                        </div>
                    </div>
                ) : (
                    <h3 className={cls.product_not_available}>Нет в наличии</h3>
                )}
            </div>
        </div>
    )
}
