import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUnit } from 'effector-react'

import { addToCart } from 'features/product'
import { $cart, ICartItem } from 'units/cart'

import { clsnm } from 'shared/lib/classNames'
import { Icon } from 'shared/ui'

import { Price } from '../Price/Price'
import { Badges } from '../Badges/Badges'
import { Size } from '../Size/Size'
import { AddToCart } from '../AddToCart/AddToCart'
import { About } from '../About/About'

import cls from './RightSide.module.scss'

// interface RightSideProps {}

const cars = [
    {
        car: 'Ford Focus',
        link: '/searchbycar/FordFocus',
    },
    {
        car: 'Fiesta',
        link: '/searchbycar/Fiesta',
    },
    {
        car: 'Mondeo',
        link: '/searchbycar/Mondeo',
    },
]

const sizes = [
    {
        id: 'MYX0202301431',
        price: 37800,
        discount: 15,
        size: 31,
        inStock: true,
        left: -1,
        boughthisweek: 14,
        cars,
    },
    {
        id: 'MYX0202301436',
        price: 35000,
        discount: -1,
        size: 36,
        inStock: false,
        left: -1,
        boughthisweek: 5,
        cars,
    },
    {
        id: 'MYX0202301439',
        price: 33400,
        discount: 20,
        size: 39,
        inStock: true,
        left: 4,
        boughthisweek: 25,
        cars,
    },
    {
        id: 'MYX0202301441',
        price: 37800,
        discount: -1,
        size: 41,
        inStock: true,
        left: -1,
        boughthisweek: 20,
        cars,
    },
]

const about = [
    ['id', 'MYX0202301441'],
    ['brand', 'MYX'],
    ['size', 'C5W'],
    ['type', 'LED'],
    ['cooling', 'Radiator'],
    ['voltage', '12 V'],
    ['capacity', '3 W'],
    ['diodes_qty', 33],
    ['diodes_model', 3014],
    ['qty', '2 pcs'],
    ['purpose', 'Interior lighting, number plate lighting'],
]

export interface ProductSize {
    id: string
    price: number
    discount: number
    size: number
    inStock: boolean
    left: number
    boughthisweek: number
    cars: typeof cars
}

interface ProductItem {
    id: string
    name: string
    sizes: ProductSize[]
    about: (string | number)[][]
}

export const RightSide = () => {
    const { productId = 'MYX02023014' } = useParams()

    const [cart, onAddToCart] = useUnit([$cart, addToCart])

    const [product] = useState<ProductItem>({
        id: productId,
        name: 'Габариты MYX C5W, 3014, 12V, 3W, Canbus, 2шт.',
        sizes,
        about,
    })

    const [currentSize, setCurrentSize] = useState(product.sizes[0])

    const localCart = useMemo(() => {
        return cart.products.reduce((acc: { [K: string]: ICartItem }, item) => {
            const sizesInclude = product.sizes.some((size) => size.id === item.id)

            if (sizesInclude) {
                acc[item.id] = item
            }

            return acc
        }, {})
    }, [cart])

    const currentSizeHandler = (size: ProductSize) => {
        setCurrentSize(size)
    }

    const addToCartHandler = () => {
        const newProduct = {
            id: currentSize.id,
            name: product.name,
            size: [currentSize.size],
            price: currentSize.price,
            discount: currentSize.discount,
            qty: 1,
        }

        onAddToCart(newProduct)
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
                cart={localCart}
                sizes={product.sizes}
                currentSize={currentSize}
                setCurrentSize={currentSizeHandler}
            />

            <AddToCart currentSize={currentSize} cart={localCart} addToCart={addToCartHandler} />

            <About about={product.about} currentSize={currentSize} />
        </div>
    )
}
