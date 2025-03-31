import { createEffect } from 'effector'
import { AxiosError } from 'axios'

import { $cart } from 'units/cart'

import { api } from 'shared/api'

import { ICartItem } from '../model/types'

interface Params {
    userId: string
    data: ICartItem[]
}

export const syncUserCartFx = createEffect<Params, string, AxiosError>('sync-cart')

syncUserCartFx.use(async ({ userId, data }) => {
    const resonse = await api.patch<string, ICartItem[]>(`/user/${userId}`, data)
    return resonse
})

$cart.on(syncUserCartFx.pending, (state, isLoading) => {
    return { ...state, isLoading }
})

$cart.on(syncUserCartFx.done, (state) => {
    return { ...state, error: null }
})

$cart.on(syncUserCartFx.fail, (state, response) => {
    return { ...state, error: response.error.message }
})
