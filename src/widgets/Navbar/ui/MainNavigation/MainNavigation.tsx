import { useLocation } from 'react-router-dom'
import { useUnit } from 'effector-react'

import { $cart } from 'units/cart'

import { clsnm } from 'shared/lib/classNames'
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink'
import { Icon } from 'shared/ui'

import { AuthOrUser } from '../AuthOrUser/AuthOrUser'
import cls from './MainNavigation.module.scss'

export const MainNavigation = () => {
    const location = useLocation()

    const cartStore = useUnit($cart)

    return (
        <ul className={clsnm(cls.MainNavigation)}>
            <li>
                <ButtonLink to="/" style="clear" className={cls.nav_item}>
                    <Icon name="notification" size={25} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink to="/" style="clear" className={cls.nav_item}>
                    <Icon name="favourites" size={25} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink
                    to="/cart"
                    style="clear"
                    className={clsnm(cls.nav_item, [], { [cls.active]: location.pathname === '/cart' })}
                >
                    {cartStore.qty ? <span className={cls.cart_counter}>{cartStore.qty}</span> : null}
                    <Icon name="cart" size={25} />
                </ButtonLink>
            </li>

            <li>
                <AuthOrUser className={clsnm(cls.nav_item, [], { [cls.active]: location.pathname === '/user' })} />
            </li>
        </ul>
    )
}
