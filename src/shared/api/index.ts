import axios from 'axios'

import { LOCAL_STORAGE_AUTH_TOKEN } from '../const/localStorage'

import { apiConfig } from './config'

const axiosInstance = axios.create({
    baseURL: apiConfig.baseURL,
    headers: apiConfig.headers,
})

export const api = {
    getWithToken: async <T>(path: string) => {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

        const response = await axiosInstance.get<T>(path, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.data
    },
    get: async <T>(path: string) => {
        const response = await axiosInstance.get<T>(path)
        return response.data
    },
    post: async <R, D>(path: string, payload: D) => {
        const response = await axiosInstance.post<R>(path, JSON.stringify(payload))
        return response.data
    },
    patch: async <T, D>(path: string, payload: D) => {
        const response = await axiosInstance.patch<T>(path, JSON.stringify(payload))
        return response.data
    },
}

export { apiConfig }
export { handleApiError } from './error'
