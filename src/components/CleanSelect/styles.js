import Select from 'react-select'

import styled from 'styled-components'

export const SelectStyle = styled(Select)`
  div {
    border: none;
  }
  min-width: 195px;
  max-width: 300px;
  font-size: 18px;
  font-weight: 700;
  display: block;
  background: white;
  outline: none;
  color: ${(props) => props.theme.secondaryBlue};
  border: none;
  border-radius: 0;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  min-height: calc(1.875rem + (1px * 2));
  cursor: pointer;

  background: white;

  & .Select__single-value {
    color: ${(props) => props.theme.secondaryBlue};
  }

  & .Select__placeholder {
    color: ${(props) => props.theme.secondaryBlue};
    background: white;
  }

  & .Select__control {
    background: white;
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

  & .Select__control {
    cursor: pointer;
    border-radius: 0;
  }

  & .Select__indicator {
    margin: 0;
    padding: 0;
  }

  path {
    color: ${(props) => props.theme.secondaryBlue};
    width: 29px;
    height: 29px;
  }
`
