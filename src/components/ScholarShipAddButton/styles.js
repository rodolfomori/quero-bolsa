import { FaPlus } from 'react-icons/fa'

import { shade } from 'polished'
import styled, { css } from 'styled-components'

const transitionCss = css`
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`
export const FitContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.a`
  margin: 16px;
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  ${transitionCss}

  &:hover {
    ${transitionCss}
    background-color: ${(props) => props.theme.mainBlue};
    p {
      color: white;
    }

    h3 {
      color: white;
    }
    svg {
      height: 80px;
      width: 80px !important;
      border-color: ${(props) => props.theme.mainYellow};
      path {
        color: ${(props) => props.theme.mainYellow};
      }
    }
  }

  p {
    ${transitionCss}
    text-align: center;
  }

  h3 {
    ${transitionCss}
  }

  svg {
    ${transitionCss}
  }

  &:active {
    background-color: ${shade('0.1', '#FBFBFB')};
  }

  @media (${(props) => props.theme.desktop}) {
    height: ${(props) => (props.empty ? '755px' : 'auto')};
    width: ${(props) => (props.empty ? '355px' : 'auto')};
  }
`
export const PlusIcon = styled(FaPlus)`
  height: 70px;
  width: 70px !important;
  margin-bottom: 30px;
  border: 7px solid ${(props) => props.theme.mainBlue};
  border-radius: 50%;
  padding: 4px;
  path {
    color: ${(props) => props.theme.mainBlue};
  }
`
