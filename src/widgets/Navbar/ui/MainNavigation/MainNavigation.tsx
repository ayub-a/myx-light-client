import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink'
import { clsnm } from 'shared/lib/classNames'

import cls from './MainNavigation.module.scss'
import { Icon } from 'shared/ui'

export const MainNavigation = () => {
    return (
        <ul className={clsnm(cls.MainNavigation)}>
            <li>
                <ButtonLink to="/" style="clear">
                    <Icon name="notification" size={24} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink to="/" style="clear">
                    <Icon name="favourites" size={24} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink to="/cart" style="clear">
                    <Icon name="cart" size={24} />
                </ButtonLink>
            </li>
            <li>
                <ButtonLink to="/" style="clear">
                    <Icon name="user" size={24} />
                </ButtonLink>
            </li>
        </ul>
    )
}
