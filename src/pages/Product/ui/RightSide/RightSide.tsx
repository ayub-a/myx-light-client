import { useMemo, useState } from 'react'
import { useUnit } from 'effector-react'

import { addToCart } from 'features/product'
import { IProduct, IProductSize } from 'units/product'
import { $cart, ICartItem } from 'units/cart'

import { clsnm } from 'shared/lib/classNames'
import { Icon } from 'shared/ui'

import { Price } from '../Price/Price'
import { Badges } from '../Badges/Badges'
import { Size } from '../Size/Size'
import { AddToCart } from '../AddToCart/AddToCart'
import { About } from '../About/About'

import cls from './RightSide.module.scss'

interface RightSideProps {
    product: IProduct
}

export const RightSide = ({ product }: RightSideProps) => {
    const [cart, onAddToCart] = useUnit([$cart, addToCart])
    const [currentSize, setCurrentSize] = useState<IProductSize>(product.sizes[0])

    const formattedCart = useMemo(() => {
        return cart.products
            .filter((item) => product.sizes.some((size) => size.id === item.id))
            .reduce((acc: { [key: string]: ICartItem }, item) => {
                acc[item.id] = item
                return acc
            }, {})
    }, [cart.products])

    const currentSizeHandler = (size: IProductSize) => {
        setCurrentSize(size)
    }

    const addToCartHandler = () => {
        onAddToCart({ name: product.name, ...currentSize })
    }

    return (
        <div className={clsnm(cls.RightSide, [], {})}>
            <div className={cls.umbrella}></div>

            <div className={cls.mini_nav}>
                <span>{location.pathname.split('/').filter(Boolean).join(' > ')}</span>
            </div>

            <div className={cls.flex_wrap}>
                <div className={cls.flex_wrap_col}>
                    <h3 className={cls.product_title}>{product.name}</h3>
                    <span className={cls.product_id}>Артикул: {currentSize.id}</span>
                </div>
                <div className={cls.favourite_btn}>
                    <Icon name="like" size={33} />
                </div>
            </div>

            <Price currentSize={currentSize} />

            <Badges currentSize={currentSize} />

            <Size
                cart={formattedCart}
                sizes={product.sizes}
                currentSize={currentSize}
                setCurrentSize={currentSizeHandler}
            />

            <AddToCart currentSize={currentSize} cart={formattedCart} addToCart={addToCartHandler} />

            <About about={product.about} />
        </div>
    )
}
