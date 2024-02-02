import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['yellow-dark']};
  } */

  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  button {
    background: transparent;
    border: none;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;
