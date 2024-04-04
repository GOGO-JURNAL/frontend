import axios from 'axios'
import { getAppUrl } from '../config/app'

export const getJournal = async () => {
    try {
        const response = await axios.get(
            `${getAppUrl()}journal?year=2022&gte=true`,
        )

        if (response.data.status === 'Success get all journal research') {
            return response.data.data
        } else {
            throw new Error('data not found')
        }
    } catch (err) {
        console.log('error :', err)
        throw err
    }
}

export const getLecturers = async () => {
    try {
        const response = await axios.get(`${getAppUrl()}dosen`)

        if (response.data.status === 'Success get all dosen') {
            return response.data.data
        } else {
            throw new Error('data not found')
        }
    } catch (err) {
        console.log('error :', err)
        throw err
    }
}

export const getDetailLecturers = async (id) => {
    try {
        const response = await axios.get(`${getAppUrl()}dosen/${id}`)

        if (response.data.status === 'Success get dosen detail') {
            return response.data.data
        } else {
            throw new Error('data not found')
        }
    } catch (err) {
        console.log('error :', err)
        throw err
    }
}
