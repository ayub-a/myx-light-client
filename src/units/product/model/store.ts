import { createStore } from 'effector'

import { IProduct } from './type'

interface IProductState {
    isLoading: boolean
    error: string | null
    productItem: IProduct | null
}

const productState: IProductState = {
    isLoading: true,
    error: null,
    productItem: null,
}

export const $productState = createStore(productState)
