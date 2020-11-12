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

a {
  cursor: pointer;
}

body, input, button,p{
  font-family: sans-serif;
  font-weight: 300;
  font-size: 16px;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

*:focus {
    outline: none;
}

button {
 cursor: pointer;
}
`
