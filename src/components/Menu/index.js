import React, { useState, useEffect } from 'react'

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { Container, MyAccountLink, ArrowIcon, MenuLink, WrapperMenu, WrapperSubMenu, SubMenuLink } from './styles'

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false)
  const [desktop, setDesktop] = useState(0)

  useEffect(() => {
    function handleResize() {
      setDesktop(window.innerWidth > 620)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Container openMenu={openMenu}>
        <WrapperMenu>
          <MyAccountLink>Minha Conta</MyAccountLink>
          {desktop && (
            <>
              <MyAccountLink>Pré-matrículas</MyAccountLink>
              <MyAccountLink>Bolsas Favoritas</MyAccountLink>
            </>
          )}

          {!desktop && (
            <MenuLink onClick={() => setOpenMenu(!openMenu)}>
              <MyAccountLink style={{ marginRight: 10 }}>Menu</MyAccountLink>
              <ArrowIcon icon={openMenu ? faChevronUp : faChevronDown} />
            </MenuLink>
          )}
        </WrapperMenu>
        {!desktop && (
          <WrapperSubMenu openMenu={openMenu}>
            <SubMenuLink openMenu={openMenu}>Pré-matrículas </SubMenuLink>
            <SubMenuLink openMenu={openMenu}>Bolsas favoritas</SubMenuLink>
          </WrapperSubMenu>
        )}
      </Container>
    </>
  )
}
