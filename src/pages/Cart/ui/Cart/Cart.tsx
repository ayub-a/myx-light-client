import { useCallback, useEffect, useState } from 'react'

import { Icon, PageLayout } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import { Sidebar } from '../Sidebar/Sidebar'
import { CartItem } from '../CartItem/CartItem'

import cls from './Cart.module.scss'

// interface CartProps {}

export interface Product {
    id: string
    name: string
    sizes: string[]
    price: number
    discount: number
    qty: number
}

const initialItems: Product[] = [
    {
        id: 'MYX03D150M',
        name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
        sizes: ['Металл', '6000K'],
        price: 285000,
        discount: 20,
        qty: 1,
    },
    {
        id: 'MYX03D150A',
        name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
        sizes: ['32 mm'],
        price: 285000,
        discount: -1,
        qty: 1,
    },
    {
        id: 'MYX03D150T',
        name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
        sizes: ['Металл', '6000K'],
        price: 285000,
        discount: 20,
        qty: 1,
    },
]

const Cart = () => {
    const [cart, setCart] = useState<Product[]>(initialItems)
    const [selected, setSelected] = useState<Product[]>([])

    const changeCartHandler = useCallback((updatedProduct: Product) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === updatedProduct.id ? updatedProduct : item
            )
        )

        setSelected((prev) =>
            prev.some((item) => item.id === updatedProduct.id)
                ? prev.map((item) =>
                      item.id === updatedProduct.id ? updatedProduct : item
                  )
                : prev
        )
    }, [])

    const removeAllSelected = () => {
        const selectedIds = new Set(selected.map((item) => item.id))
        setCart((prev) => prev.filter((item) => !selectedIds.has(item.id)))
        setSelected([])
    }

    const removeCartItem = useCallback((id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
        setSelected((prev) => prev.filter((item) => item.id !== id))
    }, [])

    const toggleSelectHandler = useCallback(
        (product?: Product) => {
            setSelected((prev) => {
                if (product) {
                    return prev.some((item) => item.id === product.id)
                        ? prev.filter((item) => item.id !== product.id)
                        : [...prev, product]
                }

                return selected.length === cart.length ? [] : cart
            })
        },
        [selected.length]
    )

    useEffect(() => {
        toggleSelectHandler()
    }, [])

    return (
        <PageLayout sidebar={<Sidebar cart={cart} selected={selected} />}>
            <div className={clsnm(cls.Cart)}>
                <div className={cls.umbrella}></div>

                <div className={cls.cart_nav}>
                    <div className={cls.cart_nav_el}>
                        <input
                            type="checkbox"
                            checked={
                                selected.length
                                    ? cart.length === selected.length
                                    : false
                            }
                            onChange={() => toggleSelectHandler()}
                        />
                        <span>Выбрать все</span>
                    </div>
                    <div
                        className={cls.cart_nav_el}
                        onClick={removeAllSelected}
                    >
                        <Icon name="remove" size={24} />
                        <span>Удалить выбранные</span>
                    </div>
                </div>

                <div>
                    {cart.map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            selected={selected}
                            changeCartHandler={changeCartHandler}
                            removeCartItem={removeCartItem}
                            toggleSelectHandler={toggleSelectHandler}
                        />
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Cart
