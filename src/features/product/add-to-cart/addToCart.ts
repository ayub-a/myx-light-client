import { createEvent } from 'effector'
import { $cart, $selected, ICartItem } from 'units/cart'

export const addToCart = createEvent<ICartItem>('add-to-cart')

$cart.on(addToCart, (state, product) => ({
    ...state,
    qty: state.qty + 1,
    products: [product, ...state.products],
}))

$selected.on(addToCart, (state, product) => [...state, product])
