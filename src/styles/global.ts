import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&
  family=Montserrat:wght@200;300;400;500;700;800;900&display=swap');  
  ${normalize};
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ui-sans-serif,system-ui,-apple-system,
    BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,
    sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 16px;
  }
  html, body, #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
  }
  div {
    user-select: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    margin: 0;
  }
  button {
    border-width: 0;
  }
  input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
  }
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }
`;
