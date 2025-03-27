const API_HOST = process.env.API_DEV_HOST_URL

export const apiConfig = {
    baseURL: API_HOST,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
    },
}
