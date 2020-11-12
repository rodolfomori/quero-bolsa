/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import { ModalContent } from '../../components'
import { Background, Icon, Container, WrapperButton } from './styles'

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
      <WrapperButton>
        <button open={open} type="button" onClick={() => onClose()}>
          <Icon icon={faTimes} />
        </button>
      </WrapperButton>
      <Container>
        <Background open={open}></Background>
        <ModalContent style={{ margin: '0 20px' }} data={data} open={open} />
      </Container>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  data: PropTypes.array,
}
