import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  gap: 7px;
  svg {
    height: 25px;
    width: 25px !important;
    path {
      color: ${(props) => props.theme.mainYellow};
    }
  }
`
