import { PropsWithChildren } from 'react'

import { IProductSize } from 'units/product'

import { clsnm } from 'shared/lib/classNames'
import { priceFormatter } from 'shared/lib/priceFormatter'

import cls from './Price.module.scss'

interface PriceProps {
    currentSize: IProductSize
}

export const Price = ({ currentSize }: PropsWithChildren<PriceProps>) => {
    return (
        <div className={clsnm(cls.Price, [], {})}>
            {currentSize.discount > 0 ? (
                <>
                    <h3 className={cls.product_price_old}>{priceFormatter.defaultPrice(currentSize.price, 'SUM')}</h3>
                    <h3 className={cls.product_price}>
                        {priceFormatter.priceWithDiscount(currentSize.price, currentSize.discount, 'SUM')}
                    </h3>
                </>
            ) : (
                <h3 className={cls.product_price}>{priceFormatter.defaultPrice(currentSize.price, 'SUM')}</h3>
            )}
        </div>
    )
}
