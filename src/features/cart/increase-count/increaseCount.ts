import { createEvent } from 'effector'
import { $cart, $selected, ICartItem } from 'units/cart'

export const increaseCount = createEvent<string>('increase-count')

function updateProductQty(arr: ICartItem[], payload: string) {
    return arr.map((product) => {
        if (product.id === payload) return { ...product, qty: product.qty + 1 }
        return product
    })
}

$cart.on(increaseCount, (state, payload) => {
    return { ...state, products: updateProductQty(state.products, payload) }
})

$selected.on(increaseCount, (state, payload) => updateProductQty(state, payload))
