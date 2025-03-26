import { createEvent } from 'effector'
import { $cart, $selected } from 'units/cart'

export const selectAllItems = createEvent('select-all-items')

$cart.on(selectAllItems, (state) => {
    const isSelected = state.products.length === $selected.getState().length ? false : true

    return {
        ...state,
        products: state.products.map((p) => ({ ...p, isSelected })),
    }
})
