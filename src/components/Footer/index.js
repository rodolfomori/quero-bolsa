import React from 'react'

import { faComments, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import { Container, FooterItem, Icon, Wrapper, FooterMessage } from './styles'

export function Footer() {
  const whatsapp = {
    icon: faComments,
    title: '0800 123 2222',
    description: 'Sex - Sex 8h-22h',
    subtitle: 'Segunda a sexta de 8h às 22h',
    link: `tel:08001232222`,
    class: 'whatsapp',
  }

  const itens = [
    {
      icon: faComments,
      title: 'Chat',
      titleDesktop: 'Chat Ao Vivo',
      description: 'Sex - Sex 8h-22h',
      link: '#',
    },
    {
      icon: faEnvelope,
      title: 'E-mail',
      titleDesktop: 'Mande um e-mail',
      description: 'Respondemos rapidinho',
      link: 'mailto:email@email.com',
    },
    {
      icon: faInfoCircle,
      title: 'Ajuda',
      titleDesktop: 'Central de ajuda',
      description: 'Encontre todas as respostas',
      link: '#',
    },
  ]

  return (
    <Container>
      <FooterItem style={{ marginBottom: 3, flexDirection: 'row', gap: 20 }}>
        <Icon icon={whatsapp.icon} />
        <div>
          <h3>{whatsapp.title}</h3>
          <h4>{whatsapp.subtitle}</h4>
        </div>
      </FooterItem>
      <Wrapper>
        {itens.map((item) => (
          <FooterItem key={item.title}>
            <Icon icon={item.icon} />
            <p>{item.title}</p>
          </FooterItem>
        ))}
      </Wrapper>
      <FooterMessage>Feito com ♡ pela Quero Educação</FooterMessage>
    </Container>
  )
}
