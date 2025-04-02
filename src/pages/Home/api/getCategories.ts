import { createEffect } from 'effector'
import { api } from 'shared/api'

import { $categories } from '../model/model'

export const fetchCategoriesFx = createEffect<void, []>('fetch-categories-fx')

fetchCategoriesFx.use(async () => {
    const response = await api.get<[]>('/categories')
    console.log(response)
    return response
})

$categories.on(fetchCategoriesFx.pending, (state, isLoading) => ({
    ...state,
    isLoading,
}))

$categories.on(fetchCategoriesFx.done, (state, response) => ({
    ...state,
    error: null,
    categories: [...state.categories, ...response.result],
}))

$categories.on(fetchCategoriesFx.fail, (state, response) => ({
    ...state,
    error: response.error.message,
}))
