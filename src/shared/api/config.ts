const API_HOST = process.env.API_DEV_HOST_URL || 'https://2c3276eec706242e.mokky.dev'

export const apiConfig = {
    baseURL: API_HOST,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
    },
}
