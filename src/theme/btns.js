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
	background-color: ${(props) => (props.isActive ? '#0066ff1d' : props.theme.colors.input)};
	color: ${(props) => (props.isActive ? props.theme.colors.primary : props.theme.colors.text)};
	height: 2rem;
	width: 2rem;
	padding: 1rem;
	transition: all 0.2s;
	:hover {
		background-color: #0066ff1d;
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const ExitBtn = styled(CircleBtn)`
	position: absolute;
	right: 1rem;
	:hover {
		background-color: #ef233c26;
		color: ${(props) => props.theme.colors.errorRed};
	}
`;

export const SaveDraftBtn = styled(MainBtn)`
	background-color: ${(props) => props.theme.colors.input};
	color: ${(props) => props.theme.colors.darkGrey};
	width: 8rem;
	cursor: not-allowed;
	:hover {
		opacity: 1;
	}
`;
