import React from 'react'

import PropTypes from 'prop-types'

import { SelectStyle } from './styles'

export const CleanSelect = ({ id, name, options, value, ...rest }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: 'none',
    }),
  }

  return (
    <SelectStyle
      inputId={id}
      classNamePrefix="Select"
      name={name}
      options={options}
      value={options.find((option) => option.value === value) || null}
      {...rest}
      noOptionsMessage={() => 'Nenhum valor encontrado'}
      loadingMessage={() => 'Procurando resultados...'}
      styles={customStyles}
    />
  )
}

CleanSelect.propTypes = {
  id: PropTypes.any,
  value: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
}
