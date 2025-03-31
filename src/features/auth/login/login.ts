import { AxiosError } from 'axios'
import { createEffect, sample } from 'effector'

import { $userStore, IUserSchema } from 'units/user'
import { $cart } from 'units/cart'

import { LOCAL_STORAGE_AUTH_TOKEN } from 'shared/const/localStorage'
import { api } from 'shared/api'

interface ILoginParams {
    email: string
    password: string
}

interface IResponse {
    token: string
    data: IUserSchema
}

interface IResponseError {
    error: string
    message: string
    statusCode: number
}

export const userLoginFx = createEffect<ILoginParams, IResponse, AxiosError<IResponseError>>('create-effect')

userLoginFx.use(async (params) => {
    const response = await api.post<IResponse, ILoginParams>('/auth', params)

    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, response.token)

    return response
})

$userStore.on(userLoginFx.pending, (state, isLoading) => {
    return { ...state, isLoading }
})

$userStore.on(userLoginFx.done, (state, response) => {
    return { ...state, ...response.result.data, isAuth: true, error: null }
})

$userStore.on(userLoginFx.fail, (state, response) => {
    const errors: Record<string, string> = {
        RESOURCE_INVALID_LOGIN_OR_PASSWORD: 'Неверный логин или пароль',
    }

    const error = response.error.response.data?.message || response.error.message

    return { ...state, error: errors[error] }
})

sample({
    clock: userLoginFx.done,
    source: $cart,
    fn: (cart, response) => {
        const products = [...cart.products, ...response.result.data.cart]
        return { ...cart, qty: products.length, products }
    },
    target: $cart,
})
