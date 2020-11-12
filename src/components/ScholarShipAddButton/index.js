import React from 'react'

import PropTypes from 'prop-types'

import { Container, PlusIcon, FitContent } from './styles'

export function ScholarShipAddButton(props) {
  const { onClick, empty, ...rest } = props

  console.log(empty)
  return (
    <Container empty={empty} onClick={onClick} {...rest} className="container">
      <PlusIcon />
      <h3>Adicionar curso</h3>
      <p>Clique para adicionar bolsas de </p>
      <p>cursos do seu interesse</p>
    </Container>
  )
}

ScholarShipAddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  empty: PropTypes.bool.isRequired,
}
