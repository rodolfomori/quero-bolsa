import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const FitContent = styled.div`
  display: flex;
  justify-content: center;
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
`

export const Icon = styled(FontAwesomeIcon)`
  path {
    color: ${(props) => props.theme.grayBackground};
  }
`
