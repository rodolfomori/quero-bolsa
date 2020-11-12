import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { keyframes } from 'styled-components'

import { ModalContent } from '../../components'

const animationBgStart = keyframes`
  0% {
    background-color: ${(props) => props.theme.modalBackground};
    opacity: 0;
  }
  100% {
    background-color: ${(props) => props.theme.modalBackground};
    opacity: 0.88;
  }
`
const animationBgEnd = keyframes`
  0% {
    background-color: ${(props) => props.theme.modalBackground};
    opacity: 0.88;
  }
  100% {
    background-color: ${(props) => props.theme.modalBackground};
    opacity: 0;
  }
`

export const ModalItem = styled(ModalContent)`
  margin: 0 20px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9999;
`
export const FitContent = styled.div`
  display: flex;
  justify-content: center;
  z-index: 9999;
`

export const WrapperButton = styled.div`
  width: calc(100vw - 30px);
  max-width: 800px;
  position: absolute;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
`
export const CloseButton = styled.button`
  background-color: transparent;
  opacity: ${(props) => (props.open ? 0.88 : 0)};
  height: 60px;
  width: 60px;
  border: none;
  font-size: 36px;
  position: absolute;
  z-index: 9999;

  path {
    color: ${(props) => props.theme.grayBackground};
    background-color: ${(props) => props.theme.modalBackground};
  }
`

export const Background = styled.div`
  background-color: ${(props) => props.theme.modalBackground};
  opacity: 0.88;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  animation: ${(props) => (props.open ? animationBgStart : animationBgEnd)} 0.7s 0s both;
`

export const Icon = styled(FontAwesomeIcon)`
  path {
    color: ${(props) => props.theme.grayBackground};
  }
`
