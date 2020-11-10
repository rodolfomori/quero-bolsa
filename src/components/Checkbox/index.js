/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Label, Spacing } from './styles'

export const CheckBox = ({ id, name, checked, ...rest }) => (
  <Container>
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input id={id} name={name} checked={checked} {...rest} type="checkbox" />
        <span className="checkbox-custom rectangular"></span>
      </label>
    </div>
  </Container>
)

CheckBox.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
}
