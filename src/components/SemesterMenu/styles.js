import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding-top: 20px;
`

const baseButtonStyles = css`
  background-color: ${(props) => props.theme.grayBackground};
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.mainBlue};
  font-weight: 700;
  border: solid 1px ${(props) => props.theme.secondaryBlue};
  height: 50px;
`

export const ChooseButtonMain = styled.button`
  ${baseButtonStyles}
  border-radius: 5px  0 0 5px;
  @media (max-width: 768px) {
    border-radius: 5px 5px 0 0;
    border-bottom: none;
  }
  background-color: ${(props) => (props.semester ? props.theme.grayBackground : props.theme.secondaryBlue)};
  color: ${(props) => (props.semester ? props.theme.secondaryBlue : props.theme.grayBackground)};
`

export const ChooseButtonSeccond = styled.button`
  ${baseButtonStyles}
  border-radius: 0;
  background-color: ${(props) => (props.semester === 2 ? props.theme.secondaryBlue : props.theme.grayBackground)};
  color: ${(props) => (props.semester === 2 ? props.theme.grayBackground : props.theme.secondaryBlue)};
`

export const ChooseButtonFirst = styled.button`
  ${baseButtonStyles}
  border-radius: 0 5px  5px  0;
  @media (max-width: 768px) {
    border-radius: 0 0 5px 5px;
    border-top: none;
  }
  background-color: ${(props) => (props.semester === 1 ? props.theme.secondaryBlue : props.theme.grayBackground)};
  color: ${(props) => (props.semester === 1 ? props.theme.grayBackground : props.theme.secondaryBlue)};
`
