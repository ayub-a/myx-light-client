import { createEvent } from 'effector'
import { $cart, CartItem } from 'units/cart'

export const addToCart = createEvent<CartItem>('add-to-cart')

$cart.on(addToCart, (state, newItem) => ({ ...state, products: [...state.products, newItem] }))
