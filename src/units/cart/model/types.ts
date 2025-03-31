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
}
export interface ICartStore extends ICartSchema {
    qty: number
    promoCode: string
    isLoading: boolean
    error: string
}
