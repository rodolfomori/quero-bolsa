import React from 'react'

import { faInfo, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import queroBolsaLogo from '../../assets/logo-querobolsa.svg'
import { Container, InfoIcon, Logo, WrapperInfo, WrapperUser, WrapperLogo, Text } from './styles'

export function Header() {
  return (
    <Container>
      <WrapperInfo>
        <InfoIcon icon={faInfo} />
        <Text>Ajuda</Text>
      </WrapperInfo>
      <WrapperLogo>
        <Logo src={queroBolsaLogo} />
      </WrapperLogo>
      <WrapperUser>
        <InfoIcon icon={faUserCircle} />
        <Text>Conta</Text>
      </WrapperUser>
    </Container>
  )
}
