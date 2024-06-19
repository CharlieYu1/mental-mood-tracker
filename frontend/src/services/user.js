import axios from 'axios'
const baseUrl = 'http://192.168.1.124:3000/api/users'

const login = async credentials => {
  const response = await axios.post(baseUrl + '/login', credentials)
  return response.data
}

const signup = async credentials => {
  const response = await axios.post(baseUrl + '/signup', credentials)
  return response.data
}

const uploadProfileImage = async (file, token) => {
  let fd = new FormData()
  fd.append('profileImage', file)
  const response = await axios.post(baseUrl + '/upload-profile-image', fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
}

// TODO:

// const changePassword = {}

export default { login, signup, uploadProfileImage }