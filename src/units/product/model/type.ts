export interface IProductSize {
    id: string
    price: number
    discount: number
    size: number | string
    inStock: boolean
    left: number
    boughthisweek: number
    cars: {
        car: string
        link: string
    }[]
}

export interface IProduct {
    id: string
    name: string
    img: string[]
    sizes: IProductSize[]
    about: (string | number)[][]
}
