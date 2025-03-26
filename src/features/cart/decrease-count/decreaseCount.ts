import { createEvent } from 'effector'
import { $cart } from 'units/cart'

export const decreaseCount = createEvent<string>('decrease-count')

$cart.on(decreaseCount, (state, payload) => {
    const updatedProductQty = state.products.map((p) => (p.id === payload && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p))
    return { ...state, products: updatedProductQty }
})
