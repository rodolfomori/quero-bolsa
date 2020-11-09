/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import { ModalContent } from '..'

import { Container, Icon } from './styles'

export function Modal({ children, open, onClose = () => {}, data }) {
  const [openBg, setOpenBg] = useState(false)
  /**
   * Timeout de 1 segundo para dar tempo da animação acontencer e retirar o componente
   */
  useEffect(() => {
    if (open) return setOpenBg(open)
    setTimeout(() => {
      setOpenBg(open)
    }, 1)
  }, [open])

  if (!openBg) return null
  return (
    <>
      <Container open={open}>
        <button open={open} type="button" onClick={() => onClose()}>
          <Icon icon={faTimes} />
        </button>
      </Container>
      <ModalContent data={data} open={open} />
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}
