import { createEvent } from 'effector'
import { $cart, ICartItem } from 'units/cart'
import { IProductSize } from 'units/product'

interface IAddTocartParams extends IProductSize {
    name: string
}

export const addToCart = createEvent<IAddTocartParams>('add-to-cart')

$cart.on(addToCart, (state, product) => {
    const { id, name, size, price, discount } = product

    if (state.products.find((p) => p.id === id)) return

    const newProduct: ICartItem = {
        id: id,
        name: name,
        size: size,
        price: price,
        discount: discount,
        qty: 1,
        isSelected: true,
    }

    return { ...state, qty: state.qty + 1, products: [newProduct, ...state.products] }
})
