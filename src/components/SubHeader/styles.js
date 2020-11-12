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
    @media (${(props) => props.theme.desktop}) {
      margin-left: 12px;
    }
  }

  p {
    word-spacing: 2px;
    line-height: 25px;
    margin-top: 16px;
    font-weight: 400;
    padding-right: 16px;
    @media (${(props) => props.theme.desktop}) {
      margin-left: 12px;
    }
  }

  .active-link {
    color: ${(props) => props.theme.blackText};
    font-weight: 500;
  }
  @media (${(props) => props.theme.desktop}) {
    margin-left: 28px;
    max-width: ${(props) => props.theme.maxWidthDesktop};

    a {
      padding-right: 10px;
    }

    span {
      font-weight: 700;
      color: ${(props) => props.theme.secondaryBlue};
    }
  }
`

export const Icon = styled(FontAwesomeIcon)`
  path {
    color: ${(props) => props.theme.secondaryBlue};
  }
`
