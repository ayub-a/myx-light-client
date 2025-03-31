import { createEvent, createStore } from 'effector'
import { IUserStore } from './types'

const initialState: IUserStore = {
    about_user: null,
    cart: null,
    payment: [],
    favourites: [],
    app_settings: null,
    isLoading: true,
    error: null,
    isAuth: false,
}

export const $userStore = createStore(initialState)

export const clearError = createEvent('clear-error')

$userStore.on(clearError, (state) => ({ ...state, error: null }))
