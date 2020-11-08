import React from 'react'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { Container, PlusIcon } from './styles'

export function ScholarShipAddButton() {
  return (
    <Container>
      <PlusIcon icon={faPlusCircle} />
      <h3>Adicionar curso</h3>
      <p>Clique para adicionar bolsas de </p>
      <p>cursos do seu interesse</p>
    </Container>
  )
}
