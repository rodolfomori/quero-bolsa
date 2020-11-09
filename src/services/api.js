import axios from 'axios'

export const mainApi = axios.create({
  baseURL: 'https://testapi.io/api/redealumni/scholarships',
  headers: {
    'Content-type': 'application/json',
  },
})
