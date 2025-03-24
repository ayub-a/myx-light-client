import { createStore } from 'effector'
import { CartItem, CartSchema } from './types'

const initialItems: CartItem[] = [
    {
        id: 'MYX03D150M',
        name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
        sizes: ['Металл', '6000K'],
        price: 285000,
        discount: 20,
        qty: 1,
    },
    {
        id: 'MYX03D150A',
        name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
        sizes: ['32 mm'],
        price: 285000,
        discount: -1,
        qty: 1,
    },
    {
        id: 'MYX03D150T',
        name: 'Штатный ксенон MYX D1S, 12V, 35W, 2шт.',
        sizes: ['Металл', '6000K'],
        price: 285000,
        discount: 20,
        qty: 1,
    },
]

const cartState: CartSchema = {
    products: initialItems,
    qty: 0,
    promoCode: '',
    totalPrice: 0,
}

export const $cart = createStore(cartState)
export const $selected = createStore<CartItem[]>(initialItems)
