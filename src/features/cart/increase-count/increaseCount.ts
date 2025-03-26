import { createEvent } from 'effector'
import { $cart } from 'units/cart'

export const increaseCount = createEvent<string>('increase-count')

$cart.on(increaseCount, (state, payload) => {
    const updateProductQty = state.products.map((product) => {
        if (product.id === payload) return { ...product, qty: product.qty + 1 }
        return product
    })
    return { ...state, products: updateProductQty }
})
