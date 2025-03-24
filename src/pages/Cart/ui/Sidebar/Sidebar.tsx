import { PropsWithChildren, useEffect, useState } from 'react'

import { priceFormatter } from 'shared/lib/priceFormatter'
import { clsnm } from 'shared/lib/classNames'
import { Button, Icon } from 'shared/ui'

import cls from './Sidebar.module.scss'

import { useUnit } from 'effector-react'
import { CartItem } from 'units/cart'
import { CartSchema } from 'units/cart/model/types'
import { getTotalPrice } from 'features/cart'

interface SidebarProps {
    cart?: CartSchema
    selected?: CartItem[]
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
    const { cart, selected = [] } = props

    const [totalPrice] = useUnit([getTotalPrice])
    const [promo, setPromo] = useState('')

    useEffect(() => {
        totalPrice()
    }, [selected])

    return (
        <div className={clsnm(cls.Sidebar, [], {})}>
            <div className={clsnm(cls.cart_top, [cls.wrap])}>
                <h3>Cart</h3>
                <span>{cart.products.length} products</span>
            </div>

            <div className={clsnm(cls.selected, [cls.wrap])}>
                <h4>Selected</h4>
                <span>{selected.length} products</span>
            </div>

            <div className={cls.promo_code} data-disabled={!selected.length}>
                <input
                    disabled={!selected.length}
                    type="text"
                    onChange={(e) => setPromo(e.target.value)}
                    value={promo}
                    placeholder="Promo code"
                />
                <div
                    className={clsnm(cls.promo_code_confirm, [], {
                        [cls.active]: !!promo,
                    })}
                >
                    <Icon name="confirmPromo" size={30} />
                </div>
            </div>

            <div className={clsnm(cls.total_price, [cls.wrap])}>
                <h3>Total:</h3>
                <span>{priceFormatter.defaultPrice(cart.totalPrice, 'SUM')}</span>
            </div>

            <Button disabled={!selected.length} className={cls.checkout_btn}>
                <Icon name="checkout" size={24} />
                Proceed to checkout
            </Button>
        </div>
    )
}
