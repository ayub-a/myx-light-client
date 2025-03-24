import { createEvent } from 'effector'
import { priceFormatter } from 'shared/lib/priceFormatter'
import { $cart, $selected } from 'units/cart'

export const getTotalPrice = createEvent('get-total-price')

$cart.on(getTotalPrice, (state) => {
    const totalPrice = $selected.getState().reduce((acc, { price, discount, qty }) => {
        const res = discount > 0 ? Number(priceFormatter.priceWithDiscount(price, discount)) * qty : price * qty
        acc += res
        return acc
    }, 0)

    return { ...state, totalPrice }
})
