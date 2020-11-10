/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import PropTypes from 'prop-types'

import { SelectStyle, Span, Container } from './styles'

export const Select = ({ id, name, options, value, label = '', ...rest }) => (
  <Container>
    <Span>{label}</Span>
    <SelectStyle
      inputId={id}
      classNamePrefix="Select"
      name={name}
      options={options}
      value={options.find((option) => option.value === value) || null}
      {...rest}
      noOptionsMessage={() => 'Nenhum valor encontrado'}
      loadingMessage={() => 'Procurando resultados...'}
    />
  </Container>
)

Select.propTypes = {
  id: PropTypes.any.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}
