import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import { CustomButton } from './styled'

export function ColourButton(props) {
  const { children, disabled = false, ...rest } = props

  return (
    <CustomButton type="button" buttonDisabled={disabled} {...rest}>
      {children}
    </CustomButton>
  )
}

ColourButton.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
}
