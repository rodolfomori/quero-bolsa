import Select from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
`
export const Span = styled.span`
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
`

export const SelectStyle = styled(Select)`
  div {
    border: none;
  }
  height: 45px;
  margin-top: 3px;
  font-weight: 300;
  width: 100%;
  font-size: 16px;
  display: block;
  background: #fefefe;
  outline: none;
  color: #666666;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  min-height: 38px;
  cursor: pointer;
  padding-right: 0;
  border: 1px solid #4a5759;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;

  & .Select__single-value {
    color: ${(props) => props.theme.blackText};
    padding-left: 15px;
    cursor: pointer;
  }
  & .Select__control {
    box-shadow: none;
    cursor: pointer;
  }
  & .Select__indicator-separator {
    display: none;
  }

  & .Select__option {
    cursor: pointer;
  }

  & .Select__value-container {
    padding: 0;
    cursor: pointer;
  }

  & .Select__menu {
    font-size: 16px;
    cursor: pointer;
  }
`
