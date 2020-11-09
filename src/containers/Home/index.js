import React, { useEffect, useState } from 'react'

import { Header, Menu, SubHeader, SemesterMenu, ScholarShipAddButton, Footer, Modal } from '../../components'

export const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Header />
      <Menu />
      <SubHeader />
      <SemesterMenu />
      <ScholarShipAddButton
        onClick={() => {
          setOpenModal(!openModal)
        }}
      />
      <Footer />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}
