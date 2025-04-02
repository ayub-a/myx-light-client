import { createStore } from 'effector'
import { ICategory } from './type'

interface ICategoriesState {
    categories: ICategory[]
    isLoading: boolean
    error: string
}

const categoriesState: ICategoriesState = {
    categories: [],
    isLoading: true,
    error: null,
}

export const $categories = createStore(categoriesState)
