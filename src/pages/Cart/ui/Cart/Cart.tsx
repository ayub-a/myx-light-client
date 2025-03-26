import { useUnit } from 'effector-react'

import { removeAllSelected, selectCartItem, removeFromCart, selectAllItems } from 'features/cart'
import { $cart, $selected, ICartItem } from 'units/cart'

import { Icon, PageLayout } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import { Sidebar } from '../Sidebar/Sidebar'
import { CartItem } from '../CartItem/CartItem'

import cls from './Cart.module.scss'

const Cart = () => {
    const [cart, selected] = useUnit([$cart, $selected])
    const cartActions = useUnit({ removeFromCart, removeAllSelected, selectCartItem, selectAllItems })

    const removeCartItemHandler = (id: string) => {
        cartActions.removeFromCart(id)
    }

    const selectCartItemHandler = (product?: ICartItem) => {
        cartActions.selectCartItem(product)
    }

    return (
        <PageLayout sidebar={<Sidebar />}>
            <div className={clsnm(cls.Cart)}>
                <div className={cls.umbrella}></div>

                <div className={cls.cart_nav}>
                    <div className={cls.cart_nav_el}>
                        <input
                            type="checkbox"
                            checked={cart.products.length ? cart.products.length === selected.length : false}
                            onChange={cartActions.selectAllItems}
                        />
                        <span>Выбрать все</span>
                    </div>
                    <div className={cls.cart_nav_el} onClick={cartActions.removeAllSelected}>
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
                            removeCartItem={removeCartItemHandler}
                            toggleSelectHandler={selectCartItemHandler}
                        />
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Cart
