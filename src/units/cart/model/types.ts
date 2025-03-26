export interface ICartItem {
    id: string
    name: string
    size: string | number
    price: number
    discount: number
    qty: number
    isSelected: boolean
}

export interface ICartSchema {
    products: ICartItem[]
    qty: number
    promoCode: string
}
