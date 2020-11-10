import React from 'react'

import { Header, Menu, SubHeader, SemesterMenu, ScholarShipAddButton, Footer, Modal, ItemHome } from '../../components'
import { useScholarShipsData } from '../../hooks/scholarShipsData'

export const Home = () => {
  const { favorites, openModal, setOpenModal } = useScholarShipsData()

  return (
    <>
      <Header />
      <Menu />
      <SubHeader />
      <SemesterMenu />
      <ScholarShipAddButton
        onClick={() => {
          setOpenModal(!openModal)
          window.scrollTo(0, 0)
        }}
      />
      {favorites &&
        favorites.length > 0 &&
        favorites.map((item, index) => <ItemHome key={index} favorite={item} index={index} />)}
      <Footer />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}
