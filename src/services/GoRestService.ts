import axios from 'axios';
const API = 'https://gorest.co.in/public/v2/'
const headers = {
    'Content-Type': 'application/json',
    'Authorization' : `Bearer 43a3de4083b0c532b49268840883ddd5ab053be85a9c6a5c42ff58fc3eb92e89`
}

export const getUsers = async () => {
    return await axios.get(`${API}users`, { headers })
}