import styled, { css } from 'styled-components'

const transitionCss = css`
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`

export const Container = styled.div`
  box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 16px;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  ${transitionCss}

  .last-child-wrapper {
    gap: 5px;
    align-items: baseline;
    margin-top: 15px;
    text-transform: none;
    margin-bottom: 10px;
  }

  .middle-child {
    border-bottom: 3px solid ${(props) => props.theme.gray};
    border-top: 3px solid ${(props) => props.theme.gray};
  }

  .middle-child-div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &:hover {
    box-shadow: 0 0 12px 14px rgba(0, 0, 0, 0.3);
  }
`

export const WrapperItens = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;

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
    font-size: 19px;
    color: ${(props) => props.theme.textBlack};
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
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

  .last-child {
    @media (${(props) => props.theme.desktop}) {
      border-bottom: none;
    }
  }
`

export const Image = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
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
