export interface ICartItem {
    id: string
    name: string
    size: string[] | number[]
    price: number
    discount: number
    qty: number
}

export interface ICartSchema {
    products: ICartItem[]
    qty: number
    promoCode: string
    totalPrice: number
}
