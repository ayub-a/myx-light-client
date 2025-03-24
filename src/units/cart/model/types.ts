export interface CartItem {
    id: string
    name: string
    sizes: string[]
    price: number
    discount: number
    qty: number
}

export interface CartSchema {
    products: CartItem[]
    qty: number
    promoCode: string
    totalPrice: number
}
