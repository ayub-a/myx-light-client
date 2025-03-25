import { createEvent } from 'effector'
import { $cart, $selected, ICartItem } from 'units/cart'

export const decreaseCount = createEvent<string>('decrease-count')

function updateProductQty(arr: ICartItem[], payload: string) {
    return arr.map((p) => (p.id === payload && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p))
}

$cart.on(decreaseCount, (state, payload) => {
    return { ...state, products: updateProductQty(state.products, payload) }
})

$selected.on(decreaseCount, (state, payload) => updateProductQty(state, payload))
