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
  ${transitionCss}
  cursor: ${(props) => (props.buttonDisabled ? 'auto' : 'pointer')};

  background: ${(props) => (props.buttonDisabled ? '#C0C0C0' : props.theme.mainYellow)};
  color: ${(props) => (props.buttonDisabled ? '#808080' : props.theme.blackText)};
  border: 2px solid ${(props) => (props.buttonDisabled ? '#808080' : props.theme.secondaryYellow)};

  &:active {
    background: ${(props) => (props.buttonDisabled ? '#C0C0C0' : props.theme.secondaryYellow)};
  }

  &:hover {
    ${transitionCss}
    color: ${(props) => (props.buttonDisabled ? '#808080' : 'white')};
    background: ${(props) => (props.buttonDisabled ? '#C0C0C0' : (props) => props.theme.secondaryYellow)};
  }
`
