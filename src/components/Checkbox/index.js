/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Label, Spacing } from './styles'

export const CheckBox = ({ checked, id, label, name, ...props }) => (
  <Container>
    <input checked={checked} id={id} name={name} style={{ marginRight: 8 }} type="checkbox" {...props} />

    <Label htmlFor={id}>{label}</Label>
  </Container>
)

CheckBox.Spacing = Spacing
