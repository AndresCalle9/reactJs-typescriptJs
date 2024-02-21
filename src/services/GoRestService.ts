import axios from 'axios';
import { User } from '../models/User';

const API = 'https://gorest.co.in/public/v2/'
const headers = {
    'Content-Type': 'application/json',
    'Authorization' : `Bearer ${process.env.GOREST_TOKEN}`
}
// console.log(process.env.GOREST_TOKEN)

export const getUsers = async () => {
    return await axios.get(`${API}users`, { headers })
}

export const postUser = async (user: User) => {
    return await axios.post(`${API}users`, user, { headers })
}

export const getUser = async (id: number) => {
    return await axios.get(`${API}users/${id}`, { headers })
}

export const deleteUser = async (id: number) => {
    return await axios.delete(`${API}users/${id}`, { headers })
}

export const updateUser = async (id: number, user: User) => {
    return await axios.put(`${API}users/${id}`, user, { headers })
}