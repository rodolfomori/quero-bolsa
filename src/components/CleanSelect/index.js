import React from 'react'

import PropTypes from 'prop-types'

import { SelectStyle } from './styles'

export const CleanSelect = ({ error, id, name, options, value, isLoading = false, ...rest }) => (
  <SelectStyle
    inputId={id}
    classNamePrefix="Select"
    error={error}
    name={name}
    options={options}
    value={options.find((option) => option.value === value) || null}
    {...rest}
    noOptionsMessage={() => 'Nenhum valor encontrado'}
    loadingMessage={() => 'Procurando resultados...'}
    isLoading={isLoading}
  />
)

CleanSelect.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}
