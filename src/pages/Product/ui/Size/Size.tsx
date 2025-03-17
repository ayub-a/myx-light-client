import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import { Button, Hint, Icon } from 'shared/ui'
import { Cart, ProductSize } from '../RightSide/RightSide'

import cls from './Size.module.scss'

interface SizeProps {
    sizes: ProductSize[]
    currentSize: ProductSize
    setCurrentSize: (size: ProductSize) => void
    cart: Cart
}

export const Size = (props: PropsWithChildren<SizeProps>) => {
    const { sizes, currentSize, setCurrentSize, cart } = props

    return (
        <div className={clsnm(cls.Size, [], {})}>
            <div className={cls.hint}></div>

            <span>Размер:</span>

            <ul className={cls.size_wrap}>
                {sizes.map((el) => (
                    <li key={el.size}>
                        <Hint text={!el.inStock ? 'Нет в наличии' : ''}>
                            <Button
                                style="outline-rounded"
                                onClick={() => setCurrentSize(el)}
                                disabled={!el.inStock}
                                className={clsnm(cls.size_btn, [], {
                                    [cls.out_of_stock]: !el.inStock,
                                    [cls.active]: currentSize.size === el.size,
                                })}
                            >
                                {el.left > 0 ? (
                                    <div className={cls.left}>
                                        <Icon name="warning" size={25} />
                                    </div>
                                ) : null}
                                {cart[el.size]?.qty ? (
                                    <div
                                        className={clsnm(cls.size_qty, [], {
                                            [cls.with_left]: el.left > 0,
                                        })}
                                    >
                                        {cart[el.size]?.qty}
                                    </div>
                                ) : null}
                                {el.size} mm
                            </Button>
                        </Hint>
                    </li>
                ))}
            </ul>
        </div>
    )
}
