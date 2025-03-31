import { ICartItem } from 'units/cart'

interface IAboutUser {
    name: string
    email: string
    phone_number: number
    address: string[]
}

interface IPayment {
    id: string
    bank: string
}

interface IAppSettings {
    theme: string
}

export interface IUserStore extends IUserSchema {
    isLoading: boolean
    error: string
    isAuth: boolean
}

export interface IUserSchema {
    about_user: IAboutUser
    cart: ICartItem[]
    favourites: []
    payment: IPayment[]
    app_settings: IAppSettings
    sensitive?: {
        password: string
    }
}

// const user: IUserSchema = {
//     about_user: {
//         name: 'Test',
//         email: 'test@test.com',
//         phone_number: 998917427662,
//         address: ['some address'],
//     },
//     auth_data: {
//         login: 'test@test.com',
//         password: '123',
//     },
//     cart: [],
//     favourites: [],
//     payment: [],
//     app_settings: { theme: 'light' },
// }
