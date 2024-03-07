import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/users'

const loginService = async credentials => {
  const response = await axios.post(baseUrl + '/login', credentials)
  return response.data
}

const signupService = async credentials => {
  const response = await axios.post(baseUrl + '/signup', credentials)
  return response.data
}

export default { loginService, signupService }