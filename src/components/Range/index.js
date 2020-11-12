/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'

export const Range = ({ value, min, max, step, ...rest }) => (
  <Container>
    <input type="range" value={value} min={min} max={max} step={step} {...rest} />
  </Container>
)

Range.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
}
