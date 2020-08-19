import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    /* background: #2b2b2e;
    color: #fff; */
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
  }

  body, input, button {
    font-size: 16px;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Lato', sans-serif;
  }

  /* #root {
    max-width: 1140px;
    margin: 0 auto;
    padding: 1.5em 1em;
  } */

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5,h6 {font-weight: 400}

  /* h1 { font-size: 2.5em; }
  h2 { font-size: 2em; }
  h3 { font-size: 1.75em; }
  h4 { font-size: 1.5em; }
  h5 { font-size: 1.25em; }
  h6 { font-size: 1em; } */

  /* Scroll */
  ::-webkit-scrollbar {
    width: .75rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textLight};
    border-radius: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => darken(0.2, theme.colors.card)};
  }
`;
