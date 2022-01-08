import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 62.5%;
	scroll-behavior: smooth;
}

body{
	overflow-x: hidden;
	font-family: 'Montserrat', sans-serif;

}
a{
	text-decoration:none;
}

input{
		font-family: inherit;
}

textarea{
		font-family: inherit;

}

`;
