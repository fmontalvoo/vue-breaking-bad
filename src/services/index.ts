import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: `${apiUrl}/character`,
})

export const getAll = async () => {
    return await (await api.get('')).data
}