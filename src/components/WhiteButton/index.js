import React from 'react'

import PropTypes from 'prop-types'

import { CustomButton } from './styled'

export function WhiteButton(props) {
  const { children, disabled = false, ...rest } = props

  return (
    <CustomButton type="button" buttonDisabled={disabled} {...rest}>
      {children}
    </CustomButton>
  )
}

WhiteButton.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
}
