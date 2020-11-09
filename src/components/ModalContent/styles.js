import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.grayBackground};
  height: 100vh;
  width: 100vw;
  z-index: 999;
  position: absolute;
  top: 0;
  margin: 70px 0;
  opacity: 1;
  padding: 16px;

  h2 {
    margin-top: 10px;
    margin-bottom: 7px;
  }

  h4 {
    margin-top: 30px;
    text-transform: uppercase;
  }
`

export const WrapperCheck = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  span {
    font-size: 18px;
  }
`

export const CheckBox = styled.input`
  border: solid 1px ${(props) => props.theme.mainBlue};
  border-radius: 0.25rem;
  content: '✔';
  display: block;
  height: 1.2rem;
  width: 1.2rem;
  background-color: ${(props) => props.theme.mainBlue};
`
export const Range = styled.input``

export const Icon = styled(FontAwesomeIcon)`
  path {
    ${(props) => props.theme.grayBackground};
  }
`
