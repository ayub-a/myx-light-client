import { createEvent } from 'effector'
import { $cart, $selected } from 'units/cart'

export const removeAllCartItems = createEvent('remove-all-cart-items')

$cart.on(removeAllCartItems, (state) => {
    const selectedIds = new Set($selected.getState().map((item) => item.id))
    return { ...state, products: state.products.filter((item) => !selectedIds.has(item.id)) }
})

$selected.on(removeAllCartItems, () => [])
