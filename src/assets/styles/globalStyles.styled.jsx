import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    position: relative;
    scroll-behavior: smooth;
  }

  html,
  body {
    width: 100%;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, li, ul, a {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;