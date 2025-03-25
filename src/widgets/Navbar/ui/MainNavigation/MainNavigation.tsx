import { useUnit } from 'effector-react'

import { $cart } from 'units/cart'

import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink'
import { clsnm } from 'shared/lib/classNames'

import cls from './MainNavigation.module.scss'
import { Icon } from 'shared/ui'

export const MainNavigation = () => {
    const cart = useUnit($cart)

    return (
        <ul className={clsnm(cls.MainNavigation)}>
            <li>
                <ButtonLink to="/" style="clear">
                    <Icon name="notification" size={25} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink to="/" style="clear">
                    <Icon name="favourites" size={25} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink to="/cart" style="clear">
                    {cart.qty ? <span className={cls.cart_counter}>{cart.qty}</span> : null}
                    <Icon name="cart" size={25} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink to="/" style="clear">
                    <Icon name="user" size={25} />
                </ButtonLink>
            </li>
        </ul>
    )
}
