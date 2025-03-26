import { createEvent } from 'effector'
import { $cart, ICartItem } from 'units/cart'

export const addToCart = createEvent<ICartItem>('add-to-cart')

$cart.on(addToCart, (state, product) => {
    if (state.products.find((p) => p.id === product.id)) return
    return { ...state, qty: state.qty + 1, products: [product, ...state.products] }
})
