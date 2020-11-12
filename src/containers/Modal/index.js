import React, { useState, useEffect } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import { Background, Icon, Container, WrapperButton, CloseButton, FitContent, ModalItem } from './styles'

export function Modal({ children, open, onClose = () => {}, data }) {
  const [openBg, setOpenBg] = useState(false)

  useEffect(() => {
    if (open) return setOpenBg(open)
    setTimeout(() => {
      setOpenBg(open)
    }, 500)
  }, [open])

  if (!openBg) return null
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
        <ModalItem data={data} open={open} />
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
