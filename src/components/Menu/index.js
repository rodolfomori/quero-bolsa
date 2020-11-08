import React, { useState } from 'react'

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { Container, MyAccountLink, ArrowIcon, MenuLink, WrapperMenu, WrapperSubMenu, SubMenuLink } from './styles'

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Container openMenu={openMenu}>
        <WrapperMenu>
          <MyAccountLink>Minha Conta</MyAccountLink>
          <MenuLink onClick={() => setOpenMenu(!openMenu)}>
            <MyAccountLink style={{ marginRight: 10 }}>Menu</MyAccountLink>
            <ArrowIcon icon={openMenu ? faChevronUp : faChevronDown} />
          </MenuLink>
        </WrapperMenu>
        <WrapperSubMenu openMenu={openMenu}>
          <SubMenuLink openMenu={openMenu}>Pré-matrículas </SubMenuLink>
          <SubMenuLink openMenu={openMenu}>Bolsas Favoritas</SubMenuLink>
        </WrapperSubMenu>
      </Container>
    </>
  )
}
