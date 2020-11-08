import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 16px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  a {
    text-decoration: none;
    margin-left: 12px;
    color: ${(props) => props.theme.secondaryBlue};
    font-weight: 700;
    font-size: 14px;
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
  }

  p {
    word-spacing: 6px;
    line-height: 25px;
    margin-top: 16px;
    font-weight: 400;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  path {
    color: ${(props) => props.theme.secondaryBlue};
  }
`
