import { useState } from 'react'
import { useUnit } from 'effector-react'

import { $cart, $selected, $totalSelectedPrice } from 'units/cart'

import { priceFormatter } from 'shared/lib/priceFormatter'
import { clsnm } from 'shared/lib/classNames'
import { Button, Icon } from 'shared/ui'

import cls from './Sidebar.module.scss'

export const Sidebar = () => {
    const [promo, setPromo] = useState('')

    const store = useUnit({ $cart, $selected, $totalSelectedPrice })

    return (
        <div className={clsnm(cls.Sidebar, [], {})}>
            <div className={clsnm(cls.cart_top, [cls.wrap])}>
                <h3>Cart</h3>
                <span>{store.$cart.products.length} products</span>
            </div>

            <div className={clsnm(cls.selected, [cls.wrap])}>
                <h4>Selected</h4>
                <span>{store.$selected.length} products</span>
            </div>

            <div className={cls.promo_code} data-disabled={!store.$selected.length}>
                <input
                    disabled={!store.$selected.length}
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
                <span>{priceFormatter.defaultPrice(store.$totalSelectedPrice, 'SUM')}</span>
            </div>

            <Button disabled={!store.$selected.length} className={cls.checkout_btn}>
                <Icon name="checkout" size={24} />
                Proceed to checkout
            </Button>
        </div>
    )
}
