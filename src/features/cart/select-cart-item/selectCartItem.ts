import { createEvent } from 'effector'
import { $cart, ICartItem } from 'units/cart'

export const selectCartItem = createEvent<ICartItem>('select-cart-item')

$cart.on(selectCartItem, (state, cartItem) => {
    return {
        ...state,
        products: state.products.map((p) => (p.id === cartItem.id ? { ...p, isSelected: !p.isSelected } : p)),
    }
})
