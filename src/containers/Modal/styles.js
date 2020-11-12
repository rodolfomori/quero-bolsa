import Select from 'react-select'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const WrapperButton = styled.div``

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

  button {
    background-color: ${(props) => props.theme.modalBackground};
    opacity: ${(props) => (props.open ? 0.88 : 0)};
    height: 60px;
    width: 60px;
    border: none;
    font-size: 36px;
    position: absolute;
    margin-right: 20px;

    path {
      color: ${(props) => props.theme.grayBackground};
    }
  }
`

export const Shadow = styled.div``

export const Icon = styled(FontAwesomeIcon)`
  path {
    color: ${(props) => props.theme.grayBackground};
  }
`
