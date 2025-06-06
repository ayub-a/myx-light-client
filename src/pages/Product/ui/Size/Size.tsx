import { PropsWithChildren } from 'react'

import { ICartItem } from 'units/cart'
import { IProductSize } from 'units/product'

import { clsnm } from 'shared/lib/classNames'
import { Button, Hint, Icon } from 'shared/ui'

import cls from './Size.module.scss'

interface SizeProps {
    cart: Record<string, ICartItem>
    sizes: IProductSize[]
    currentSize: IProductSize
    setCurrentSize: (size: IProductSize) => void
}

export const Size = (props: PropsWithChildren<SizeProps>) => {
    const { cart, sizes, currentSize, setCurrentSize } = props

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
                                    [cls.active]: currentSize.id === el.id,
                                })}
                            >
                                {el.left > 0 ? (
                                    <div className={cls.left}>
                                        <Icon name="warning" size={25} />
                                    </div>
                                ) : null}
                                {cart[el.id]?.qty ? (
                                    <div
                                        className={clsnm(cls.size_qty, [], {
                                            [cls.with_left]: el.left > 0,
                                        })}
                                    >
                                        {cart[el.id]?.qty}
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
