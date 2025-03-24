import { useCallback } from 'react'

import { Icon, PageLayout } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import { Sidebar } from '../Sidebar/Sidebar'
import { CartItemTest } from '../CartItem/CartItem'

import cls from './Cart.module.scss'

import { useUnit } from 'effector-react'

import { $cart, $selected, CartItem } from 'units/cart'
import { changeCart, removeAllCartItems, removeCartItem, selectCartItem } from 'features/cart'

const Cart = () => {
    const [cart, selected, onRemoveCartItem, onRemoveAllItems, onChangeCart, onToggleSelect] = useUnit([
        $cart,
        $selected,
        removeCartItem,
        removeAllCartItems,
        changeCart,
        selectCartItem,
    ])

    const changeCartHandler = useCallback((updatedProduct: CartItem) => {
        onChangeCart(updatedProduct)
    }, [])

    const removeAllSelected = () => {
        onRemoveAllItems()
    }

    const removeCartElem = useCallback((id: string) => {
        onRemoveCartItem(id)
    }, [])

    const toggleSelectHandler = useCallback(
        (product?: CartItem) => {
            onToggleSelect(product)
        },
        [selected.length]
    )

    return (
        <PageLayout sidebar={<Sidebar cart={cart} selected={selected} />}>
            <div className={clsnm(cls.Cart)}>
                <div className={cls.umbrella}></div>

                <div className={cls.cart_nav}>
                    <div className={cls.cart_nav_el}>
                        <input
                            type="checkbox"
                            checked={selected.length ? cart.products.length === selected.length : false}
                            onChange={() => toggleSelectHandler()}
                        />
                        <span>Выбрать все</span>
                    </div>
                    <div className={cls.cart_nav_el} onClick={removeAllSelected}>
                        <Icon name="remove" size={24} />
                        <span>Удалить выбранные</span>
                    </div>
                </div>

                <div>
                    {cart.products.map((product) => (
                        <CartItemTest
                            key={product.id}
                            product={product}
                            selected={selected}
                            changeCartHandler={changeCartHandler}
                            removeCartItem={removeCartElem}
                            toggleSelectHandler={toggleSelectHandler}
                        />
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Cart
