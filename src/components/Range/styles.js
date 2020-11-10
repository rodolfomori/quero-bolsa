import styled from 'styled-components'

export const Container = styled.div`
  margin: 25px 0;
  input[type='range'] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: ${(props) => props.theme.mainBlue};
    border-radius: 25px;
    border: 0px solid red;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 3px solid ${(props) => props.theme.mainBlue};
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: ${(props) => props.theme.grayBackground};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -15px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #ac51b5;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #ac51b5;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #65001c;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #ac51b5;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  input[type='range']::-ms-fill-upper {
    background: #ac51b5;
    border: 0px solid red;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  input[type='range']::-ms-thumb {
    box-shadow: 0px 0px 0px red, 0px 0px 0px red;
    border: 0px solid red;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: red;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: red;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: red;
  }

  body {
    padding: 30px;
  }
`
