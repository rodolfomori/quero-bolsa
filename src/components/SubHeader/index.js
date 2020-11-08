import React from 'react'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { Container, Icon } from './styles'

export function SubHeader() {
  return (
    <Container>
      <div>
        <Icon icon={faChevronLeft} />
        <a href="/">Minha conta</a>
      </div>
      <div>
        <h2>Bolsas Favoritas </h2>
        <p>
          Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas
          disponíveis.
        </p>
      </div>
    </Container>
  )
}
