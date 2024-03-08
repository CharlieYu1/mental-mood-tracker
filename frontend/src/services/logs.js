import axios from 'axios'
const baseUrl = 'http://192.168.1.138:3000/api/logs' // may change to include userid in route

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const config = {
        headers: { 'Authorization': token }
    }

    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}