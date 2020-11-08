import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.nav`
  background-color: ${(props) => props.theme.mainBlue};
`

export const WrapperMenu = styled.nav`
  background-color: ${(props) => props.theme.mainBlue};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 16px;
`

export const WrapperSubMenu = styled.nav`
  background-color: ${(props) => props.theme.mainBlue};
  max-height: ${(props) => (props.openMenu ? '100px' : 0)};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 16px;
  flex-direction: column;
  transition: max-height 0.15s ease-in-out;
  position: fixed;
  width: 100%;
`

export const MyAccountLink = styled.a`
  color: white;
  font-weight: 700;
  padding: 12px 0;
  font-size: 15px;
`

export const MenuLink = styled.a`
  color: white;
  font-weight: 700;
  display: flex;
  path {
    color: white;
  }
`

export const SubMenuLink = styled.a`
  color: white;
  font-weight: 500;
  display: flex;
  padding: 16px 0;
  opacity: ${(props) => (props.openMenu ? 1 : 0)};
  transition: opacity 0.1s ease-in-out;
`

export const ArrowIcon = styled(FontAwesomeIcon)`
  margin-top: 16px;
`
