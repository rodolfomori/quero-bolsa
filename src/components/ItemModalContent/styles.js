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

  @media (${(props) => props.theme.desktop}) {
    grid-template-columns: 1fr 2fr 5fr;
  }
`

const style = css`
  font-weight: 700;
  font-size: 18px;
`

export const WrapperItens = styled.div`
  padding-left: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .first-child-div {
    width: 100%;
  }

  .main-title {
    color: ${(props) => props.theme.secondaryBlue};
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 3px;
  }

  .course-level {
    padding-bottom: 30px;
    @media (${(props) => props.theme.desktop}) {
      padding: 0;
    }
  }

  .percent {
    color: ${(props) => props.theme.green};
    ${style}
    span {
      font-weight: 500;
    }
  }

  .price-div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%;

    @media (${(props) => props.theme.desktop}) {
      align-items: flex-end;
      width: auto;
      min-width: 150px;
    }
  }

  .price {
    color: ${(props) => props.theme.green};
    ${style}
  }

  @media (${(props) => props.theme.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`
