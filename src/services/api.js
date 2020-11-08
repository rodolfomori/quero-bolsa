import axios from 'axios'

export const apiCoursesList = axios.create({
  baseURL: 'https://testapi.io/api/redealumni/scholarships',
  headers: {
    'Content-type': 'application/json',
  },
})
