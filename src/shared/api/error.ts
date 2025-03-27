import axios from 'axios'

export const handleApiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        return {
            status: error.response?.status || 500,
            message: error.response?.data?.message || error.message,
        }
    }
    return { status: 500, message: 'Unknown error' }
}
