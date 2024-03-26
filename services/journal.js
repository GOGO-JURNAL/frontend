import axios from 'axios'
import { getAppUrl } from '../config/app'

export const getJournal = async () => {
    const response = await axios.get(`${getAppUrl()}jurnals`)
    return response.data[0].data
}

export const getLecturers = async () => {
    const response = await axios.get(`${getAppUrl()}dosen`)
    return response.data[0].data
}
