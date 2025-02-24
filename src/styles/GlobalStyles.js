import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    background-color: #000;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;