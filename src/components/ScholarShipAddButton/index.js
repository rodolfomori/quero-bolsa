import React from 'react'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import { Container, PlusIcon } from './styles'

export function ScholarShipAddButton(props) {
  const { onClick, ...rest } = props
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container onClick={onClick} {...rest}>
      <PlusIcon icon={faPlusCircle} />
      <h3>Adicionar curso</h3>
      <p>Clique para adicionar bolsas de </p>
      <p>cursos do seu interesse</p>
    </Container>
  )
}

ScholarShipAddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}
