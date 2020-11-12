import styled, { css } from 'styled-components'

export const Container = styled.div`
  .card::after {
    clear: both;
    display: block;
    content: '';
  }
  .card .checkbox-container {
    float: left;
    width: 50%;
    box-sizing: border-box;
    text-align: center;
    padding: 40px 0px;
  }

  .checkbox-label {
    display: block;
    position: relative;
    margin: auto;
    cursor: pointer;
    font-size: 22px;
    line-height: 24px;
    height: 24px;
    width: 24px;
    clear: both;
  }

  .checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkbox-label .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 24px;
    width: 24px;
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    border: 0 solid;
    border: 1px solid ${(props) => props.theme.blackText};
  }

  .checkbox-label input:checked ~ .checkbox-custom {
    background-color: ${(props) => props.theme.mainBlue};
    border-radius: 5px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity: 1;
    border: none;
  }

  .checkbox-label .checkbox-custom::after {
    position: absolute;
    content: '';
    left: 12px;
    top: 12px;
    height: 0px;
    width: 0px;
    border-radius: 5px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity: 1;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }

  .checkbox-label input:checked ~ .checkbox-custom::after {
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 8px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    background-color: ${(props) => props.theme.mainBlue};
    border-radius: 2px;
  }

  .checkbox-label .checkbox-custom::before {
    position: absolute;
    content: '';
    left: 10px;
    top: 10px;
    width: 0px;
    height: 0px;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.mainBlue};
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .checkbox-label input:checked ~ .checkbox-custom::before {
    left: -3px;
    top: -3px;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3);
    opacity: 0;
    z-index: 999;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }
`
// const input = css`
//   border: 1px solid #000;
//   border-radius: 3px;
//   position: absolute;
//   left: 0px;
//   top: 1px;
//   width: 17px;
//   height: 17px;
//   line-height: 19px;
//   text-align: center;
//   transition: all 0.2s;
// `

// const inputChecked = css`
//   ${input}
//   content: '✔';
// `

// export const Container = styled.div`
//   display: inline-block;

//   > input {
//     display: none;
//   }

//   > input + label {
//     cursor: pointer;
//     margin-right: 20px;
//     position: relative;

//     &:before {
//       ${input}
//       content: '';
//     }

//     &:after {
//       ${inputChecked}
//     }
//   }

//   > input:not(:checked) + label {
//     &:after {
//       opacity: 0;
//       transform: scale(0);
//     }
//   }

//   > input:disabled:not(:checked) + label {
//     &:before {
//       background-color: ${(props) => props.theme.mainBlue};
//       border-color: #999;
//     }
//   }

//   > input:checked + label {
//     &:after {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }

//   > input:disabled:checked + label {
//     &:after {
//       color: #999;
//     }
//   }

//   > input:disabled + label {
//     color: #aaa;
//   }

//   > input:checked:focus + label,
//   input:not(:checked):focus + label {
//     &:before {
//       ${inputChecked}
//     }
//   }
// `

// export const Label = styled.label`
//   cursor: pointer;
//   user-select: none;
//   font-style: normal;
//   font-weight: 300;
//   font-size: 16px;
//   line-height: 19px;
//   color: #86808c !important;
// `

// export const Spacing = styled.div`
//   margin-top: 60px;
//   padding-bottom: 2px;
//   padding-top: 16px;
// `
