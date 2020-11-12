import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  z-index: 999;
  position: absolute;
  height: 100vh;
  top: 0;
  margin: 70px 15px;
  opacity: 1;
  padding: 16px;
  overflow: auto;
  width: calc(100vw - 30px);
  margin-bottom: 250px;
  max-width: 800px;

  h2 {
    margin-top: 10px;
    margin-bottom: 7px;
  }

  h4 {
    margin-top: 30px;
    text-transform: uppercase;
  }

  .label-checkbox {
    font-size: 20px;
    margin-left: -12px;
  }

  .price {
    font-size: 18px;
    margin-top: 4px;
  }
`

export const WrapperCheck = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  span {
    font-size: 18px;
  }
`

export const WrapperSelect = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-content: space-between;
  margin-top: 40px;
  border-bottom: 3px solid ${(props) => props.theme.gray};
  padding-bottom: 25px;

  .result-select {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    @media (${(props) => props.theme.desktop}) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }
  }

  span {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.blackText};

    & :last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
`

export const CheckBox = styled.input`
  border: solid 1px ${(props) => props.theme.mainBlue};
  border-radius: 0.25rem;
  content: '✔';
  display: block;
  height: 1.2rem;
  width: 1.2rem;
  background-color: ${(props) => props.theme.mainBlue};
`
export const WrapperItensResp = styled.div`
  @media (${(props) => props.theme.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
  }
`

export const WrapperButtons = styled.div`
  width: 100%;
  margin-top: 35px;
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 20px;
  @media (${(props) => props.theme.desktop}) {
    display: flex;
    justify-content: flex-end;
  }
`
