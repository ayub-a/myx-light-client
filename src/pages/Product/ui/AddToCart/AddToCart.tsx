import { PropsWithChildren } from 'react'
import { useUnit } from 'effector-react'

import { decreaseCount, increaseCount } from 'features/cart'
import { removeFromCart } from 'features/cart'

import { IProductSize } from 'units/product'
import { ICartItem } from 'units/cart'

import { clsnm } from 'shared/lib/classNames'
import { Button, Icon } from 'shared/ui'

import cls from './AddToCart.module.scss'

import uzumshop from 'shared/assets/uzum-shop.png'
import aslifshop from 'shared/assets/alif-shop.png'

interface AddToCartProps {
    currentSize: IProductSize
    cart: Record<string, ICartItem>
    addToCart: () => void
}

export const AddToCart = ({ currentSize, cart, addToCart }: PropsWithChildren<AddToCartProps>) => {
    const [onIncreaseCount, onDecreaseCount, onRemoveFromCart] = useUnit([increaseCount, decreaseCount, removeFromCart])

    const increase = () => {
        onIncreaseCount(currentSize.id)
    }

    const decrease = () => {
        onDecreaseCount(currentSize.id)
    }

    const removeFromCartHandler = () => {
        onRemoveFromCart(currentSize.id)
    }

    return (
        <div className={clsnm(cls.AddToCart, [], {})}>
            <div className={cls.flex_wrap}>
                <Button
                    className={clsnm(cls.add_to_cart, [cls.button], {
                        [cls.hide]: cart[currentSize.id]?.id === currentSize?.id,
                    })}
                    onClick={addToCart}
                >
                    <Icon name="addtocart" size={24} />
                    Добавить в корзину
                </Button>

                {cart[currentSize.id]?.qty ? (
                    <Button className={clsnm(cls.qty_btn, [cls.remove_btn])} onClick={removeFromCartHandler}>
                        <Icon name="close" size={22} />
                    </Button>
                ) : null}

                <div
                    className={clsnm(cls.cart_counter, [cls.button], {
                        [cls.show_qty]: cart[currentSize.id]?.id === currentSize?.id,
                    })}
                >
                    <Button className={cls.qty_btn} onClick={decrease}>
                        -
                    </Button>

                    <span>{cart[currentSize.id]?.qty}</span>
                    <Button className={cls.qty_btn} onClick={increase}>
                        +
                    </Button>
                </div>

                {cart[currentSize.id]?.qty ? (
                    <Button className={clsnm(cls.buy_now, [cls.button])} style="rounded">
                        Перейти в корзину
                    </Button>
                ) : (
                    <Button className={clsnm(cls.buy_now, [cls.button])} style="outline-rounded">
                        Купить в 1 клик
                    </Button>
                )}
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
