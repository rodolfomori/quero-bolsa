import React, { useEffect, useState } from 'react'

import { Header, Menu, SubHeader, SemesterMenu, ScholarShipAddButton, Footer } from '../../components'
import { apiCoursesList } from '../../services/api'
// import { Container } from './styles';

export const Home = () => {
  const [openModal, setOpenModal] = useState(false)
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

  return (
    <>
      <Header />
      <Menu />
      <SubHeader />
      <SemesterMenu />
      <ScholarShipAddButton onClick={() => setOpenModal(!openModal)} />
      <Footer />
    </>
  )
}
