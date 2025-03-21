import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'
import { Button, Icon } from 'shared/ui'

import { Cart, ProductSize } from '../RightSide/RightSide'

import cls from './AddToCart.module.scss'

import uzumshop from 'shared/assets/uzum-shop.png'
import aslifshop from 'shared/assets/alif-shop.png'

interface AddToCartProps {
    currentSize: ProductSize
    changeCart: (newCart: Cart) => void
    cart: Cart
}

export const AddToCart = ({ currentSize, changeCart, cart }: PropsWithChildren<AddToCartProps>) => {
    const cartHandler = (size: number) => {
        changeCart({ [size]: { qty: 1, size }, ...cart })
    }

    const increase = () => {
        cart[currentSize.size].qty++
        changeCart({ ...cart })
    }

    const decrease = () => {
        cart[currentSize.size].qty--

        if (cart[currentSize.size].qty === 0) delete cart[currentSize.size]

        changeCart({ ...cart })
    }

    return (
        <div className={clsnm(cls.AddToCart, [], {})}>
            <div className={cls.flex_wrap}>
                <Button
                    className={clsnm(cls.add_to_cart, [cls.button], {
                        [cls.hide]: cart[currentSize.size]?.size === currentSize.size,
                    })}
                    onClick={() => cartHandler(currentSize.size)}
                >
                    <Icon name="addtocart" size={24} />
                    Добавить в корзину
                </Button>

                <div
                    className={clsnm(cls.cart_counter, [cls.button], {
                        [cls.show_qty]: cart[currentSize.size]?.size === currentSize.size,
                    })}
                >
                    <Button className={cls.qty_btn} onClick={decrease}>
                        -
                    </Button>
                    <span>{cart[currentSize.size]?.qty}</span>
                    <Button className={cls.qty_btn} onClick={increase}>
                        +
                    </Button>
                </div>

                <Button className={clsnm(cls.buy_now, [cls.button])} style="outline-rounded">
                    Купить в 1 клик
                </Button>
            </div>

            <span className={cls.divider}>или</span>

            <div className={cls.flex_wrap}>
                <Button className={clsnm(cls.uzum_shop, [cls.button])}>
                    <img src={uzumshop} alt="" />
                    Купить в Uzum
                </Button>
                <Button className={clsnm(cls.alif_shop, [cls.button])}>
                    <img src={aslifshop} alt="" />
                    Купить в Alif Shop
                </Button>
            </div>
        </div>
    )
}
