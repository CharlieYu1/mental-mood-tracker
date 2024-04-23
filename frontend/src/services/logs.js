import axios from 'axios'
const baseUrl = 'http://192.168.1.124:3000/api/logs/saveLog' // may change to include userid in route


const getAll = () => {
    const config = {
        headers: { 'Authorization': token }
    }

    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}

const saveLog = async (newObject, token) => {
    // console.log(newObject)
    // console.log(token)

    const config = {
        headers: { 'Authorization': `Bearer ${token}` }
    }

    console.log(config)

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

export default { getAll, saveLog }