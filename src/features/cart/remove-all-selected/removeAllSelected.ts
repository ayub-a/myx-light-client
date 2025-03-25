import { createEvent } from 'effector'
import { $cart, $selected } from 'units/cart'

export const removeAllSelected = createEvent('remove-all-selected')

$cart.on(removeAllSelected, (state) => {
    const selectedIds = new Set($selected.getState().map((item) => item.id))
    const updatedCartList = state.products.filter((item) => !selectedIds.has(item.id))

    return { ...state, qty: updatedCartList.length, products: updatedCartList }
})

$selected.on(removeAllSelected, () => [])
