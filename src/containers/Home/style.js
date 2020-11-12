import styled from 'styled-components'

export const FitContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Container = styled.div`
  display: grid;
  max-width: ${(props) => props.theme.maxWidthDesktop};

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
