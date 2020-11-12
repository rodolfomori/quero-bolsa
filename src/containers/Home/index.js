import React from 'react'

import { Header, Menu, SubHeader, SemesterMenu, ScholarShipAddButton, Footer, ItemHome } from '../../components'
import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { Modal } from '../Modal'
import { Container, FitContainer, Wrapper } from './style'

export const Home = () => {
  const { favorites, openModal, setOpenModal } = useScholarShipsData()

  return (
    <>
      <Header />
      <Menu />
      <Wrapper>
        <FitContainer>
          <SubHeader />
          <SemesterMenu />

          <Container>
            <ScholarShipAddButton
              onClick={() => {
                setOpenModal(!openModal)
                window.scrollTo(0, 0)
              }}
              empty={!favorites.length > 0}
            />
            {favorites &&
              favorites.length > 0 &&
              favorites.map((item, index) => <ItemHome key={index} favorite={item} index={index} />)}
          </Container>
        </FitContainer>
      </Wrapper>
      <Footer />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}
