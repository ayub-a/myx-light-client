import { createEvent } from 'effector'
import { $cart, $selected, ICartItem } from 'units/cart'

export const selectCartItem = createEvent<ICartItem>('select-cart-item')

$selected.on(selectCartItem, (state, cartItem) => {
    if (cartItem) {
        return state.some((item) => item.id === cartItem.id)
            ? state.filter((item) => item.id !== cartItem.id)
            : [...state, cartItem]
    }
    return state.length === $cart.getState().products.length ? [] : $cart.getState().products
})
