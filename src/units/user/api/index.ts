import { createEffect, sample } from 'effector'
import { AxiosError } from 'axios'

import { $cart } from 'units/cart'

import { api } from 'shared/api'
import { LOCAL_STORAGE_AUTH_TOKEN } from 'shared/const/localStorage'

import { IUserSchema } from '../model/types'
import { $userStore } from '../model/store'

export const authMeFx = createEffect<void, IUserSchema, AxiosError>('fetch-user')

authMeFx.use(async () => {
    const hasToken = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

    if (!hasToken) throw new Error()

    const response = await api.getWithToken<IUserSchema>(`/auth_me`)
    return response
})

$userStore.on(authMeFx.pending, (state, isLoading) => {
    return { ...state, isLoading }
})

$userStore.on(authMeFx.done, (state, response) => {
    return { ...state, ...response.result, isAuth: true, error: null }
})

$userStore.on(authMeFx.fail, (state, response) => {
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
    return { ...state, error: response.error.message }
})

sample({
    clock: authMeFx.done,
    source: { cart: $cart, user: $userStore },
    fn: ({ cart, user }) => {
        const products = [...user.cart, ...cart.products]
        return { ...cart, qty: products.length, products }
    },
    target: $cart,
})
