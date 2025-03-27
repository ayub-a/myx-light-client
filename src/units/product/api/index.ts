import { createEffect } from 'effector'
import { AxiosError } from 'axios'

import { api, handleApiError } from 'shared/api'

import { $productState } from 'units/product/model/product'
import { IProduct } from '../model/type'

export const fetchProductFx = createEffect<string, IProduct, AxiosError>('fetch-product')

fetchProductFx.use(async (productId) => {
    const response = await api.get<IProduct[]>(`/product?id=${productId}`)
    return response[0]
})

$productState.on(fetchProductFx.pending, (state, isPending) => {
    return { ...state, isLoading: isPending }
})

$productState.on(fetchProductFx.done, (state, response) => {
    return { ...state, error: null, productItem: response.result }
})

$productState.on(fetchProductFx.fail, (state, response) => {
    const error = handleApiError(response.error)
    return { ...state, error: error.message }
})
