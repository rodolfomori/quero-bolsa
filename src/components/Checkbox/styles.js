import styled, { css } from 'styled-components'

const input = css`
  border: 1px solid #000;
  border-radius: 3px;
  position: absolute;
  left: 0px;
  top: 1px;
  width: 17px;
  height: 17px;
  line-height: 19px;
  text-align: center;
  transition: all 0.2s;
`

const inputChecked = css`
  ${input}
  content: '✔';
`

export const Container = styled.div`
  display: inline-block;

  > input {
    display: none;
  }

  > input + label {
    cursor: pointer;
    margin-right: 20px;
    padding-left: 26px;
    position: relative;

    &:before {
      ${input}
      content: '';
    }

    &:after {
      ${inputChecked}
    }
  }

  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }

  > input:disabled:not(:checked) + label {
    &:before {
      background-color: ${(props) => props.theme.mainBlue};
      border-color: #999;
    }
  }

  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }

  > input:disabled + label {
    color: #aaa;
  }

  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      ${inputChecked}
    }
  }
`

export const Label = styled.label`
  cursor: pointer;
  user-select: none;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #86808c !important;
`

export const Spacing = styled.div`
  margin-top: 60px;
  padding-bottom: 2px;
  padding-top: 16px;
`
