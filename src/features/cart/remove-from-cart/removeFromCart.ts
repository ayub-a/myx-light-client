import { createEvent } from 'effector'
import { $cart } from 'units/cart'

export const removeFromCart = createEvent<string>('remove-from-cart')

$cart.on(removeFromCart, (state, itemId) => {
    const products = state.products.filter((item) => item.id !== itemId)
    return { ...state, qty: products.length, products }
})
