import { createStore } from 'effector'

import { priceFormatter } from 'shared/lib/priceFormatter'

import { ICartItem, ICartSchema } from './types'

const initialItems: ICartItem[] = [
    // {
    //     id: 'MYX03D150M',
    //     name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
    //     size: ['Металл', '6000K'],
    //     price: 285000,
    //     discount: 20,
    //     qty: 1,
    //     isSelected: true,
    // },
    // {
    //     id: 'MYX03D150T',
    //     name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
    //     size: ['Металл', '6000K'],
    //     price: 285000,
    //     discount: 20,
    //     qty: 1,
    //     isSelected: true,
    // },
]

const cartState: ICartSchema = {
    products: initialItems,
    qty: initialItems.length,
    promoCode: '',
}

export const $cart = createStore(cartState)

export const $selected = $cart.map((state) => state.products.filter((p) => p.isSelected))

export const $totalSelectedPrice = $selected.map((product) =>
    product.reduce((acc, { price, discount, qty }) => {
        const res = discount > 0 ? Number(priceFormatter.priceWithDiscount(price, discount)) * qty : price * qty
        acc += res
        return acc
    }, 0)
)
