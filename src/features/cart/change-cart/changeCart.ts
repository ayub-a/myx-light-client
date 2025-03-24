import { createEvent } from 'effector'
import { $cart, $selected, CartItem } from 'units/cart'

export const changeCart = createEvent<CartItem>('change-cart')

$cart.on(changeCart, (state, cartItem) => {
    const products = state.products.map((item) => (item.id === cartItem.id ? cartItem : item))
    return { ...state, products }
})

$selected.on(changeCart, (state, cartItem) => {
    return state.some((item) => item.id === cartItem.id)
        ? state.map((item) => (item.id === cartItem.id ? cartItem : item))
        : state
})
