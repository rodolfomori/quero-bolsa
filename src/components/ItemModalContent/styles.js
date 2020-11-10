import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 5fr;
  border-bottom: 3px solid ${(props) => props.theme.gray};
  padding: 25px 0;
  align-items: center;

  .wrapper-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 90%;
    max-height: 70px;
  }
`

const style = css`
  font-weight: 700;
  font-size: 18px;
`

export const WrapperItens = styled.div`
  padding-left: 15px;
  width: 100%;

  .main-title {
    color: ${(props) => props.theme.secondaryBlue};
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 3px;
  }

  .course-level {
    padding-bottom: 30px;
  }

  .percent {
    color: ${(props) => props.theme.green};
    ${style}
  }

  .price {
    color: ${(props) => props.theme.green};
    ${style}
    padding-top:10px;
  }
`
