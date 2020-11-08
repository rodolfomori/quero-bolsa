import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  border-right: 3px solid #e3e3e3;
  padding-right: 13px;
`

export const WrapperLogo = styled.div``

export const WrapperUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  border-left: 3px solid #e3e3e3;
  padding-left: 13px;
`
export const Text = styled.p`
  color: ${(props) => props.theme.mainBlue};
  font-weight: 600;
`

export const InfoIcon = styled(FontAwesomeIcon)`
  height: 30px;
  width: 30px !important;
  path {
    color: ${(props) => props.theme.mainBlue};
  }
`

export const Logo = styled.img`
  height: 45px;
`
