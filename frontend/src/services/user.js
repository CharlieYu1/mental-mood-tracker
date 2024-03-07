import axios from 'axios'
const baseUrl = 'http://192.168.1.138:3000/api/users'

const login = async credentials => {
  const response = await axios.post(baseUrl + '/login', credentials)
  return response.data
}

const signup = async credentials => {
  const response = await axios.post(baseUrl + '/signup', credentials)
  return response.data
}

export default { login, signup }