import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지

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
      font-family: 'pretendard';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transform : rotate(0.04deg); 
    }
      
    @font-face {
      font-family : 'pretendard';
      src : url(/public/fonts/Pretendard-Regular.otf);
    }
      
    @font-face {
      font-family : 'gmarket';
      src : url(/public/fonts/GmarketSansMedium.otf);
    }
`;

export default GlobalStyles;