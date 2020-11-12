import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'

export const MainCheckBox = ({ id, name, checked, ...rest }) => (
  <Container>
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input id={id} name={name} checked={checked} {...rest} type="checkbox" />
        <span className="checkbox-custom rectangular"></span>
      </label>
    </div>
  </Container>
)

MainCheckBox.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  checked: PropTypes.bool,
}
