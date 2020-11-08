import React, { useEffect } from 'react'

import { Header } from '../../components'
import { apiCoursesList } from '../../services/api'
// import { Container } from './styles';

export const Home = () => {
  useEffect(() => {
    async function LoadData() {
      try {
        const response = await apiCoursesList.get()
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    LoadData()
  }, [])

  return <Header />
}
