import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --color-error: #ed4337;
    --color-background: #FBFAFF;
    --color-border: #265D97;
  }

  body {
    font-family: Barlow, 'sans-serif';
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-background)
  }
`;

export { GlobalStyles };
