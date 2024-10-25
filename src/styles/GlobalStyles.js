// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background || '#ffffff'};
    color: ${({ theme }) => theme.text || '#333333'};
  }

  a {
    color: ${({ theme }) => theme.link || 'blue'};
    text-decoration: none;
  }

  /* Additional styles for buttons, headings, etc. */
`;
