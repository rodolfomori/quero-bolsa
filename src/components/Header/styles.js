import { FaRegUserCircle, FaInfo, FaWhatsapp } from 'react-icons/fa'

import styled, { css } from 'styled-components'

export const FitContent = styled.div`
  display: flex;
  justify-content: center;
`
export const Container = styled.div`
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidthDesktop};
  width: 100%;

  @media (${(props) => props.theme.desktop}) {
    display: grid;
    grid-template-columns: 8fr 4fr 8fr;
    margin: 0 40px;
  }
`

const iconStyle = css`
  height: 30px;
  width: 30px !important;

  path {
    color: ${(props) => props.theme.mainBlue};
  }
`

export const InfoIcon = styled(FaInfo)`
  ${iconStyle}
  padding: 5px;
  border: 2px solid ${(props) => props.theme.mainBlue};
  border-radius: 20px;
`

export const WrapperWhats = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const UserIcon = styled(FaRegUserCircle)`
  ${iconStyle}
`

export const WhatsIcon = styled(FaWhatsapp)`
  ${iconStyle}

  path {
    color: ${(props) => props.theme.green};
  }
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding-right: 13px;

  @media (${(props) => props.theme.desktop}) {
    display: flex;
    flex-direction: revert;
    gap: 10px;
    justify-content: space-between;
  }
  div {
    :first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      padding-right: 13px;
      border-right: 3px solid #e3e3e3;
      @media (${(props) => props.theme.desktop}) {
        margin-left: 40px;
      }
    }
  }
`

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
`

export const WrapperUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  border-left: 3px solid #e3e3e3;
  padding-left: 13px;
  @media (${(props) => props.theme.desktop}) {
    border-left: none;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 40px;
  }
`
export const Text = styled.p`
  color: ${(props) => props.theme.mainBlue};
  font-weight: 600;
`

export const Logo = styled.img`
  height: 45px;
`
