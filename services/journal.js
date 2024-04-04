import axios from 'axios'
import { getAppUrl } from '../config/app'

export const getJournal = async () => {
    const response = await axios.get(`${getAppUrl()}journal?year=2022&gte=true`)
    return response.data.data
}

export const getLecturers = async () => {
    const response = await axios.get(`${getAppUrl()}dosen`)
    return response.data.data
}

export const getDetailLecturers = async (id) => {
    const response = await axios.get(`${getAppUrl()}dosen/${id}`)
    return response.data.data
}
