import styled, { css } from 'styled-components'

const transitionCss = css`
  -webkit-transition: all 0.8s ease-in-out;
  -moz-transition: all 0.8s ease-in-out;
  -ms-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
`

export const FitContent = styled.div`
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding-top: 20px;

  @media (${(props) => props.theme.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 40px;
    max-width: ${(props) => props.theme.maxWidthDesktop};
  }
`

const baseButtonStyles = css`
  background-color: ${(props) => props.theme.grayBackground};
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.mainBlue};
  font-weight: 700;
  border: solid 1px ${(props) => props.theme.secondaryBlue};
  height: 50px;
  font-size: 17px;

  @media (${(props) => props.theme.desktop}) {
    height: 40px;
    max-width: 250px;
    padding: 0 15px;
  }
`

export const ChooseButtonMain = styled.button`
  ${baseButtonStyles}
  border-radius: 5px 5px 0 0;
  background-color: ${(props) => (props.semester ? props.theme.grayBackground : props.theme.secondaryBlue)};
  color: ${(props) => (props.semester ? props.theme.secondaryBlue : props.theme.grayBackground)};
  @media (${(props) => props.theme.desktop}) {
    border-radius: 5px 0 0 5px;
  }
  ${transitionCss}

  &:hover {
    ${transitionCss}
    color: white;
    background: ${(props) => (props.buttonDisabled ? 'transparent' : (props) => props.theme.secondaryBlue)};
  }
`

export const ChooseButtonSeccond = styled.button`
  ${baseButtonStyles}
  border-radius: 0;
  background-color: ${(props) => (props.semester === 2 ? props.theme.secondaryBlue : props.theme.grayBackground)};
  color: ${(props) => (props.semester === 2 ? props.theme.grayBackground : props.theme.secondaryBlue)};
  border-top: none;
  border-bottom: none;
  ${transitionCss}
  &:hover {
    ${transitionCss}
    color: white;
    background: ${(props) => (props.buttonDisabled ? 'transparent' : (props) => props.theme.secondaryBlue)};
  }
  @media (${(props) => props.theme.desktop}) {
    border: solid 1px ${(props) => props.theme.secondaryBlue};
    border-left: none;
    border-right: none;
  }
`

export const ChooseButtonFirst = styled.button`
  ${baseButtonStyles}
  border-radius: 0  0 5px  5px;
  background-color: ${(props) => (props.semester === 1 ? props.theme.secondaryBlue : props.theme.grayBackground)};
  color: ${(props) => (props.semester === 1 ? props.theme.grayBackground : props.theme.secondaryBlue)};
  @media (${(props) => props.theme.desktop}) {
    border-radius: 0 5px 5px 0;
  }
  ${transitionCss}
  &:hover {
    ${transitionCss}
    color: white;
    background: ${(props) => (props.buttonDisabled ? 'transparent' : (props) => props.theme.secondaryBlue)};
  }
`
