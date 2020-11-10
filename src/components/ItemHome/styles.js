import styled, { css } from 'styled-components'

export const Container = styled.div`
  /* display: grid;
  grid-template-rows: 2fr 1fr 2fr; */
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 16px;
  align-items: center;
  background-color: #ffffff;

  .last-child-wrapper {
    gap: 5px;
    align-items: baseline;
    margin-top: 15px;
    text-transform: none;
    margin-bottom: 10px;
  }
`

const style = css`
  font-weight: 700;
  font-size: 18px;
`

export const WrapperItens = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 3px solid ${(props) => props.theme.gray};

  .first-child {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .main-title {
    color: ${(props) => props.theme.textBlack};
    font-weight: 700;
    font-size: 22px;
  }

  .course {
    color: ${(props) => props.theme.secondaryBlue};
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }

  .qb-text {
    font-size: 20px;
    color: ${(props) => props.theme.textBlack};
    font-weight: 700;
    margin-bottom: 15px;
  }

  .full-price {
    font-size: 20px;
    text-decoration: line-through;
    margin-top: 10px;
  }

  .price {
    color: ${(props) => props.theme.green};
    font-weight: 700;
    font-size: 24px;
    margin-top: 10px;
  }

  .month {
    font-size: 20px;
  }
`

export const WrapperStars = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;

  p {
    color: ${(props) => props.theme.textBlack}!important;
    font-weight: 700;
    font-size: 24px;
  }
`

export const WrapperMiddle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  text-transform: uppercase;
  margin-top: 10px;
  span {
    font-size: 20px;
  }
`
export const WrapperFooter = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`

export const WrapperButtons = styled.div`
  width: 100%;
  margin-top: 35px;
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 20px;
  padding: 0 20px;
`
