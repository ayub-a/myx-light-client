import { AxiosError } from 'axios'
import { createEffect, sample } from 'effector'

import { api } from 'shared/api'
import { LOCAL_STORAGE_AUTH_TOKEN } from 'shared/const/localStorage'
import { $userStore, IUserSchema } from 'units/user'

interface IParams {
    username: string
    email: string
    password: string
}

interface IResponse {
    token: string
    data: IResponseData
}

interface IResponseData extends IUserSchema {
    email: string
    password: string
}

interface IResponseError {
    error: string
    message: string
    statusCode: number
}

export const userRegistrationFx = createEffect<IParams, IResponse, AxiosError<IResponseError>>('user-registraion')

userRegistrationFx.use(async (params) => {
    const newUser: IResponseData = {
        about_user: {
            name: params.username,
            email: params.email,
            phone_number: 998905005050,
            address: ['some address'],
        },
        sensitive: {
            password: params.password,
        },
        cart: [],
        favourites: [],
        payment: [],
        app_settings: { theme: 'light' },
        password: params.password,
        email: params.email,
    }

    const response = await api.post<IResponse, IUserSchema>('/register', newUser)

    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, response.token)

    return response
})

$userStore.on(userRegistrationFx.pending, (state, isLoading) => {
    return { ...state, isLoading }
})

$userStore.on(userRegistrationFx.done, (state, response) => {
    console.log(response.result)
    return { ...state, ...response.result.data, isAuth: true, error: null }
})

$userStore.on(userRegistrationFx.fail, (state, response) => {
    const errors: Record<string, string> = {
        RESOURCE_USER_ALREADY_EXISTS: 'Пользователь с таким логином уже существует!',
    }

    const error = response.error.response.data?.message || response.error.message

    return { ...state, error: errors[error] }
})

sample({
    clock: userRegistrationFx.done,
    fn: (response) => console.log('REGISTRATION:', response),
})
