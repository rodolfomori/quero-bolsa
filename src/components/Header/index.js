import React, { useState, useEffect } from 'react'

import queroBolsaLogo from '../../assets/img/logo-querobolsa.svg'
import {
  Container,
  InfoIcon,
  Logo,
  WrapperInfo,
  WrapperUser,
  WrapperLogo,
  Text,
  UserIcon,
  WrapperWhats,
  WhatsIcon,
  FitContent,
} from './styles'

export function Header() {
  const [desktop, setDesktop] = useState(0)

  useEffect(() => {
    function handleResize() {
      setDesktop(window.innerWidth > 1015)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <FitContent>
      <Container>
        <WrapperInfo>
          <div>
            <InfoIcon />
            <Text>{desktop ? 'Como funciona' : 'Ajuda'}</Text>
          </div>

          {desktop && (
            <WrapperWhats>
              <WhatsIcon></WhatsIcon>
              <div>
                <Text>0800 123 2222</Text>
                <Text>Envie mensagem ou ligue</Text>
              </div>
            </WrapperWhats>
          )}
        </WrapperInfo>

        <WrapperLogo>
          <Logo src={queroBolsaLogo} />
        </WrapperLogo>
        <WrapperUser>
          {desktop && <Text style={{ marginRight: 5 }}>Nome Sobrenome</Text>}
          <UserIcon />
          {!desktop && <Text>Conta</Text>}
        </WrapperUser>
      </Container>
    </FitContent>
  )
}
