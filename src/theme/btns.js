import styled from 'styled-components';

export const MainBtn = styled.button`
	line-height: 1.6rem;
	padding: 1.2rem;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 1.6rem;
	text-transform: capitalize;
	color: ${(props) => props.theme.colors.light};
	:hover {
		opacity: 0.8;
	}
`;

export const CircleBtn = styled(MainBtn)`
	clip-path: circle(50% at 50% 50%);
	background-color: ${(props) => props.theme.colors.transparent};
	color: ${(props) => props.theme.colors.text};
	height: 2rem;
	width: 2rem;
	padding: 1rem;
	transition: all 0.2s;
	:focus,
	:active {
		background-color: #0066ff1d;
		color: ${(props) => props.theme.colors.primary};
	}
`;
