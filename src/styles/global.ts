import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #2b2b2e;
    color: #fff;
    line-height: 1.5;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    max-width: 1140px;
    margin: 0 auto;
    padding: 40px 15px;
  }

  button {
    cursor: pointer;
  }

  h1 { font-size: 2.5em; }
  h2 { font-size: 2em; }
  h3 { font-size: 1.75em; }
  h4 { font-size: 1.5em; }
  h5 { font-size: 1.25em; }
  h6 { font-size: 1em; }
`;
