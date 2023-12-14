import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import './fonts/fonts.css'

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
      text-decoration: none;
      color: inherit;
    }

    *{
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Pretendard';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transform : rotate(0.04deg); 
    }
`;

export default GlobalStyles;