import { createEvent, sample } from 'effector'

import { $userStore, IUserStore } from 'units/user'
import { $cart } from 'units/cart'

import { LOCAL_STORAGE_AUTH_TOKEN } from 'shared/const/localStorage'

export const userLogout = createEvent('logout-user')

$userStore.on(userLogout, () => {
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)

    const resetedState: IUserStore = {
        about_user: null,
        cart: null,
        payment: [],
        favourites: [],
        app_settings: null,
        isLoading: false,
        error: null,
        isAuth: false,
    }

    return resetedState
})

sample({
    clock: userLogout,
    source: $cart,
    fn: (cart) => {
        return { ...cart, qty: 0, products: [] }
    },
    target: $cart,
})
