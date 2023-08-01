import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Oswald 200';
    src: url('/fonts/Oswald-ExtraLight.ttf');
  }

  @font-face {
    font-family: 'Oswald 300';
    src: url('/fonts/Oswald-Light.ttf');
  }

  @font-face {
    font-family: 'Oswald';
    src: url('/fonts/Oswald-Regular.ttf');
  }

  @font-face {
    font-family: 'Oswald 500';
    src: url('/fonts/Oswald-Medium.ttf');
  }

  @font-face {
    font-family: 'Oswald 600';
    src: url('/fonts/Oswald-SemiBold.ttf');
  }

  @font-face {
    font-family: 'Oswald 700';
    src: url('/fonts/Oswald-Bold.ttf');
  }
`;

export default GlobalStyles;
