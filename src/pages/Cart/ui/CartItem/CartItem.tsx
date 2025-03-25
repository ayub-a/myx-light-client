import { memo, PropsWithChildren } from 'react'
import { useUnit } from 'effector-react'

import { decreaseCount, increaseCount } from 'features/cart'
import { ICartItem } from 'units/cart'

import { clsnm } from 'shared/lib/classNames'
import { priceFormatter } from 'shared/lib/priceFormatter'
import { Button, Icon } from 'shared/ui'

import cls from './CartItem.module.scss'

import testLightImg from 'shared/assets/test-light-img.png'

interface CartItemProps {
    product: ICartItem
    selected: ICartItem[]
    removeCartItem: (id: string) => void
    toggleSelectHandler: (product: ICartItem) => void
}

export const CartItem = memo(
    (props: PropsWithChildren<CartItemProps>) => {
        const { product, selected, removeCartItem, toggleSelectHandler } = props

        const cartItemActions = useUnit({ decreaseCount, increaseCount })

        const decrease = () => {
            cartItemActions.decreaseCount(product.id)
        }

        const increase = () => {
            cartItemActions.increaseCount(product.id)
        }

        const checked = selected.some((el) => el.id === product.id)

        return (
            <div className={clsnm(cls.CartItem, [], {})}>
                <div className={cls.left_block}>
                    <div className={cls.checkbox}>
                        <input type="checkbox" checked={checked} onChange={() => toggleSelectHandler(product)} />
                    </div>

                    <div className={cls.product_block}>
                        <div className={cls.product_img}>
                            {product.discount > 0 ? <span className={cls.discount}>-{product.discount}%</span> : null}
                            <img src={testLightImg} alt="" />
                        </div>

                        <div className={cls.product_about}>
                            <h3 className={cls.product_name}>{product.name}</h3>

                            <span className={cls.product_id}>Артикул: {product.id}</span>

                            <ul className={cls.product_sizes}>
                                {product.size.map((size, i) => (
                                    <li key={i}>{size}</li>
                                ))}
                            </ul>

                            <div className={cls.product_price_wrap}>
                                {product.discount > 0 ? (
                                    <>
                                        <h3 className={cls.product_price_old}>
                                            {priceFormatter.defaultPrice(product.price, 'SUM')}
                                        </h3>
                                        <h3 className={cls.product_price}>
                                            {priceFormatter.priceWithDiscount(product.price, product.discount, 'SUM')}
                                            <span>/ 1шт.</span>
                                        </h3>
                                    </>
                                ) : (
                                    <h3 className={cls.product_price}>
                                        {priceFormatter.defaultPrice(product.price, 'SUM')} <span>/ 1шт.</span>
                                    </h3>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cls.right_block}>
                    <div className={cls.price_block_wrap}>
                        <div className={cls.price_block}>
                            {product.discount > 0 ? (
                                <>
                                    <h3 className={cls.product_price_old}>
                                        {priceFormatter.defaultPrice(product.price * product.qty, 'SUM')}
                                    </h3>
                                    <h3 className={cls.product_price}>
                                        {priceFormatter.priceWithDiscount(
                                            product.price * product.qty,
                                            product.discount,
                                            'SUM'
                                        )}
                                    </h3>
                                </>
                            ) : (
                                <h3 className={cls.product_price}>
                                    {priceFormatter.defaultPrice(product.price * product.qty, 'SUM')}
                                </h3>
                            )}
                        </div>

                        <div className={cls.product_qty_nav}>
                            <button disabled={product.qty === 1} onClick={decrease}>
                                -
                            </button>
                            <span>{product.qty}</span>
                            <button onClick={increase}>+</button>
                        </div>
                    </div>

                    <div className={cls.product_mini_nav}>
                        <Button style="clear">
                            <Icon name="like" size={24} />
                        </Button>

                        <Button style="clear" onClick={() => removeCartItem(product.id)}>
                            <Icon name="remove" size={24} />
                        </Button>
                    </div>
                </div>
            </div>
        )
    },
    (prevProps, nextProps) =>
        prevProps.product === nextProps.product && prevProps.toggleSelectHandler === nextProps.toggleSelectHandler
)
