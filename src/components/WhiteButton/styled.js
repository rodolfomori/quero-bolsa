import styled, { css } from 'styled-components'

const transitionCss = css`
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`

export const CustomButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 70px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  transition: background-color 0.2s;
  cursor: ${(props) => (props.buttonDisabled ? 'auto' : 'pointer')};
  margin-right: 20px;

  background: transparent;
  color: ${(props) => props.theme.secondaryBlue};
  border: 2px solid ${(props) => props.theme.secondaryBlue};
  ${transitionCss}

  &:active {
    background: '#7238AE';
  }

  &:hover {
    ${transitionCss}
    color: white;
    background: ${(props) => (props.buttonDisabled ? 'transparent' : (props) => props.theme.secondaryBlue)};
  }

  transition: width 0.7s linear;
`
