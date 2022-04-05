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
	font-family: 'Inter', sans-serif;

}

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 7px;
  }
  &::-webkit-scrollbar-button {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.medGrey};
    border-radius: 3rem;
    height: 5px;
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
