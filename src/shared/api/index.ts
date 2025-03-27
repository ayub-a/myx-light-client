import axios from 'axios'
import { apiConfig } from './config'

const axiosInstance = axios.create({
    baseURL: apiConfig.baseURL,
    headers: apiConfig.headers,
})

export const api = {
    get: async <T>(path: string) => {
        const response = await axiosInstance.get<T>(path)
        return response.data
    },
    post: async <T, D>(path: string, payload: D) => {
        const response = await axiosInstance.post<T>(path, payload)
        return response.data
    },
}

export { apiConfig }
export { handleApiError } from './error'
