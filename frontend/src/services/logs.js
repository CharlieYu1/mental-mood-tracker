import axios from 'axios'
const baseUrl = 'http://192.168.1.124:3000/api/logs' // may change to include userid in route

const getLog = async (token, date) => {

    const response = await axios.get(`${baseUrl}/getLog`, {
        headers: { 'Authorization': `Bearer ${token}`},
        params: { date: date }
    })
    return response.data

}

const saveLog = async (newObject, token) => {
    // console.log(newObject)
    // console.log(token)

    const config = {
        headers: { 'Authorization': `Bearer ${token}` }
    }

    const response = await axios.post(`${baseUrl}/saveLog`, newObject, config)
    return response.data
}

const getMonthlyMoods = async (token, date) => {

    const response = await axios.get(`${baseUrl}/getMonthlyMoods`, {
        headers: { 'Authorization': `Bearer ${token}`},
        params: { date: date }
    })
    return response.data

}

const getMonthlySleepHours = async (token, date) => {

    const response = await axios.get(`${baseUrl}/getMonthlySleepHours`, {
        headers: { 'Authorization': `Bearer ${token}`},
        params: { date: date }
    })
    return response.data

}

const getMonthlyActivitiesCount = async (token, date) => {

    const response = await axios.get(`${baseUrl}/getMonthlyActivitiesCount`, {
        headers: { 'Authorization': `Bearer ${token}`},
        params: { date: date }
    })
    return response.data

}

export default { getLog, saveLog, getMonthlyMoods, getMonthlySleepHours, getMonthlyActivitiesCount }