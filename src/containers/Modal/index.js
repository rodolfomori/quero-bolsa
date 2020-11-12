import React, { useState, useEffect } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import { ModalContent } from '../../components'
import { Background, Icon, Container, WrapperButton, CloseButton, FitContent } from './styles'

export function Modal({ open, onClose = () => {}, data }) {
  return (
    <>
      <FitContent>
        <WrapperButton>
          <CloseButton open={open} type="button" onClick={() => onClose()}>
            <Icon icon={faTimes} />
          </CloseButton>
        </WrapperButton>
      </FitContent>
      <Container>
        <Background open={open}></Background>
        <ModalContent style={{ margin: '0 20px' }} data={data} open={open} />
      </Container>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.array,
}
