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
  min-height: calc(1.875rem + (1px * 2));
  cursor: pointer;
  padding-right: 0;
  border: 1px solid #4a5759;
  border-radius: 5px;

  & .Select__placeholder {
    color: ${(props) => props.theme.blackText};
    padding-left: 7px;
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__option {
    cursor: pointer;
  }

  & .Select__value-container {
    padding: 0;
  }

  & .Select__menu {
    font-size: 14px;
  }
`
