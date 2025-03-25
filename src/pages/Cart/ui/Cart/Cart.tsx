import { useUnit } from 'effector-react'

import { removeAllSelected, selectCartItem, removeFromCart } from 'features/cart'
import { $cart, $selected, ICartItem } from 'units/cart'

import { Icon, PageLayout } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import { Sidebar } from '../Sidebar/Sidebar'
import { CartItem } from '../CartItem/CartItem'

import cls from './Cart.module.scss'

const Cart = () => {
    const [cart, selected] = useUnit([$cart, $selected])
    const cartActions = useUnit({ removeFromCart, removeAllSelected, selectCartItem })

    const removeAllSelectedHandler = () => {
        cartActions.removeAllSelected()
    }

    const removeCartElem = (id: string) => {
        cartActions.removeFromCart(id)
    }

    const toggleSelectHandler = (product?: ICartItem) => {
        cartActions.selectCartItem(product)
    }

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
                    <div className={cls.cart_nav_el} onClick={removeAllSelectedHandler}>
                        <Icon name="remove" size={24} />
                        <span>Удалить выбранные</span>
                    </div>
                </div>

                <div>
                    {cart.products.map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            selected={selected}
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
