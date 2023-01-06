import axios from 'axios'

import type { APIResponse } from '@/models/response.model'

const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: `${apiUrl}/character`,
})

export const getAll = async () => {
    try {
        return (await api.get<APIResponse>('')).data
    } catch (error) {
        throw error
    }
}