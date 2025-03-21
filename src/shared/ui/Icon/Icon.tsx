// others
import location from 'shared/assets/icons/location.svg'
import language from 'shared/assets/icons/language.svg'
import shop from 'shared/assets/icons/shop.svg'
import burger from 'shared/assets/icons/burger.svg'
import wholesale from 'shared/assets/icons/wholesale.svg'
import arrowRight from 'shared/assets/icons/arrowRight.svg'
import localeTime from 'shared/assets/icons/localeTime.svg'
import emptyCategory from 'shared/assets/icons/emptyCategory.svg'
import search from 'shared/assets/icons/search.svg'
import addtocart from 'shared/assets/icons/addtocart.svg'
import info from 'shared/assets/icons/info.svg'
import confirmPromo from 'shared/assets/icons/confirmPromo.svg'
import close from 'shared/assets/icons/close.svg'
import checkout from 'shared/assets/icons/checkout.svg'
import box from 'shared/assets/icons/box.svg'
import warningV1 from 'shared/assets/icons/warning-v1.svg'

// badges
import completed from 'shared/assets/icons/completed.svg'
import warning from 'shared/assets/icons/warning.svg'
import boughthisweek from 'shared/assets/icons/boughthisweek.svg'
import car from 'shared/assets/icons/car.svg'
import discount from 'shared/assets/icons/discount.svg'

// main nav
import notification from 'shared/assets/icons/notification.svg'
import favourites from 'shared/assets/icons/favourite.svg'
import cart from 'shared/assets/icons/cart.svg'
import user from 'shared/assets/icons/user.svg'

// car light purposes

import { clsnm } from 'shared/lib/classNames'

import cls from './Icon.module.scss'
import { memo } from 'react'

const icons = {
    search,
    location,
    language,
    localeTime,
    shop,
    burger,
    wholesale,
    arrowRight,
    notification,
    cart,
    user,
    emptyCategory,
    favourites,
    like: favourites,
    car,
    completed,
    boughthisweek,
    warning,
    warningV1,
    discount,
    addtocart,
    info,
    confirmPromo,
    close,
    remove: close,
    checkout,
    box,
}

export type Icons = keyof typeof icons

export interface IconProps {
    name: Icons
    size?: number
    color?: string
    className?: string
}

export const Icon = memo((props: IconProps) => {
    const { name, size = 19, color = 'currentColor', className } = props

    const icon = name ? icons[name] : null

    return (
        <svg className={clsnm(cls.Icon, [className])} data-icon={name} width={size} height={size} fill={color}>
            <use xlinkHref={`/icons.svg#${icon.id}`} />
        </svg>
    )
})
