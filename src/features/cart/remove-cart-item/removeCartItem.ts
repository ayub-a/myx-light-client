import { createEvent } from 'effector'
import { $cart, $selected } from 'units/cart'

export const removeCartItem = createEvent<string>('remove-cart-item')

$cart.on(removeCartItem, (state, itemId) => {
    const products = state.products.filter((item) => item.id !== itemId)

    return { ...state, products }
})

$selected.on(removeCartItem, (state, itemId) => state.filter((item) => item.id !== itemId))
