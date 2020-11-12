import React, { useState, useEffect } from 'react'

import { Container, FooterItem, Wrapper, FooterMessage, Whatsapp, Comments, Envelope, InfoCircle } from './styles'

export function Footer() {
  const [desktop, setDesktop] = useState(0)

  useEffect(() => {
    function handleResize() {
      setDesktop(window.innerWidth > 980)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const itens = [
    {
      icon: <Whatsapp />,
      title: '0800 123 2222',
      subTitle: 'Segunda a sexta de 8h às 22h',
      description: 'Sex - Sex 8h-22h',
      link: ``,
      class: 'whatsapp',
    },
    {
      icon: <Comments />,
      title: 'Chat',
      titleDesktop: 'Chat Ao Vivo',
      description: 'Sex - Sex 8h-22h',
      link: '',
    },
    {
      icon: <Envelope />,
      title: 'E-mail',
      titleDesktop: 'Mande um e-mail',
      description: 'Respondemos rapidinho',
      link: '',
    },
    {
      icon: <InfoCircle />,
      title: 'Ajuda',
      titleDesktop: 'Central de ajuda',
      description: 'Encontre todas as respostas',
      link: '',
    },
  ]

  return (
    <Container>
      {!desktop && (
        <FooterItem style={{ marginBottom: 3, flexDirection: 'row', gap: 20 }}>
          {itens[0].icon}
          <div>
            <h3>{itens[0].title}</h3>
            <h4>{itens[0].subTitle}</h4>
          </div>
        </FooterItem>
      )}
      <Wrapper>
        {desktop
          ? itens.map((item, index) =>
              index > 0 ? (
                <FooterItem key={item.title}>
                  {item.icon}
                  <div>
                    <h3>{item.titleDesktop}</h3>
                    <h4>{item.description}</h4>
                  </div>
                </FooterItem>
              ) : (
                <FooterItem style={{ flexDirection: 'row', gap: 20 }}>
                  {itens[0].icon}
                  <div>
                    <h3>{itens[0].title}</h3>
                    <h4>{itens[0].description}</h4>
                  </div>
                </FooterItem>
              )
            )
          : itens.map(
              (item, index) =>
                index > 0 && (
                  <FooterItem key={item.title}>
                    {item.icon}
                    <p>{item.title}</p>
                  </FooterItem>
                )
            )}
      </Wrapper>
      <FooterMessage>Feito com ♡ pela Quero Educação</FooterMessage>
    </Container>
  )
}
