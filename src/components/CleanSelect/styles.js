import Select from 'react-select'

import styled from 'styled-components'

export const SelectStyle = styled(Select)`
  div {
    border: none;
  }

  width: 250px;
  font-size: 18px;
  font-weight: 700;
  display: block;
  background: ${(props) => props.theme.grayBackground};
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
  padding-right: 0;

  background: ${(props) => props.theme.grayBackground};

  & .Select__single-value {
    color: ${(props) => props.theme.secondaryBlue};
  }

  & .Select__placeholder {
    color: ${(props) => props.theme.secondaryBlue};
    background: ${(props) => props.theme.grayBackground};
  }

  & .Select__control {
    background: ${(props) => props.theme.grayBackground};
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

  path {
    color: ${(props) => props.theme.secondaryBlue};
    width: 29px;
    height: 29px;
  }
`

export const ErrorMessage = styled.span`
  color: red;
  position: absolute;
  font-size: 12px;
`
