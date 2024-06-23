import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

:root {
	// Colors
  --color-main: #313D4C;
  --color-background: #F3F4F6;
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

}
`;

export default GlobalStyle;