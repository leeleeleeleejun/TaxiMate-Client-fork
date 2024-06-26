import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-display: swap;
        src: local('Pretendard Black'), url(../assets/fonts/Pretendard-Black.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-display: swap;
        src: local('Pretendard ExtraBold'), url(../assets/fonts/Pretendard-ExtraBold.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: local('Pretendard Bold'), url(../assets/fonts/Pretendard-Bold.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-display: swap;
        src: local('Pretendard SemiBold'), url(../assets/fonts/Pretendard-SemiBold.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: local('Pretendard Medium'), url(../assets/fonts/Pretendard-Medium.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-display: swap;
        src: local('Pretendard Regular'), url(../assets/fonts/Pretendard-Regular.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-display: swap;
        src: local('Pretendard Light'), url(../assets/fonts/Pretendard-Light.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-display: swap;
        src: local('Pretendard ExtraLight'), url(../assets/fonts/Pretendard-ExtraLight.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-display: swap;
        src: local('Pretendard Thin'), url(../assets/fonts/Pretendard-Thin.woff2) format('woff2');
    }
    
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  width: 100%;
  font-family: 'Pretendard', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


a {
    color: black;
    text-decoration: none;
}

button {
    display: block;
    cursor: pointer;
    border: none;
    background: none;
}


:root {
  --header-height: 56px;
  --footer-height: 70px;  
    
	// Colors
  --color-main: #313D4C;
  --color-background: #F3F4F6;
  --color-white: #FFFFFF;  
  --color-contrast: #181F29;
  --color-shadow : #F4F5F7;
  --color-press : #F2F3F5;
  --color-gray-100: #6C7887;
  --color-gray-200: #B0B9C2;
  --color-gray-300: #F3F4F6;
  --color-red: #EA4156;
  --color-blue: #3182F7;
    
  --color-unavailable-background : #F9E1E1;
  --color-unavailable-text : #EA5659;
    
  --color-warning-background : #F9ECDB;
  --color-warning-text : #F7982A;
    
  --color-available-background : #DDE8FC;
  --color-available-text : #4283F6;  
  
  --color-orange: #FF6229;

  // Font size
  --font-large: 30px;
  --font-medium: 20px;
  --font-regular: 16px;
  --font-small: 14px;
  --font-micro: 10px;
    
  // Font weight
  --weight-bold: 900;
  --weight-semi-bold: 700;
  --weight-regular: 500;
  --weight-light: 300;
}
`;

export default GlobalStyle;
