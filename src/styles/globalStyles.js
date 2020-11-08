import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: 0;
 color: ${(props) => props.theme.blackText};
}

body {
background:${(props) => props.theme.grayBackground};
color: ${(props) => props.theme.blackText};
-webkit-font-smoothing: antialiased
}

body, input, button,p{
  font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
  font-size: 16px;
}

button {
 cursor: pointer;
}
`
