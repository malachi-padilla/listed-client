import styled from 'styled-components';

export const MainInput = styled.input`
	border-radius: 0.5rem;
	outline: none;
	line-height: 1.6rem;
	padding: 1.2rem 1.2rem 1rem;
	border: none;
	border: 0.1rem solid ${(props) => props.theme.colors.medGrey};
	transition: all 500ms;
	font-size: 1.4rem;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.input};
	:hover {
		border: 0.1rem solid ${(props) => props.theme.colors.darkGrey};
	}
	::placeholder {
		font-weight: 500;
		font-size: 1.4rem;
		color: ${(props) => props.theme.colors.darkGrey};
		opacity: 0.8;
	}
	:focus {
		border: 0.1rem solid ${(props) => props.theme.colors.primary};
	}

	:-webkit-autofill,
	:-webkit-autofill:hover,
	:-webkit-autofill:focus {
		-webkit-text-fill-color: ${(props) => props.theme.colors.dark};
		background-color: ${(props) => props.theme.colors.main};
	}
`;

export const OptionBar = styled.div`
	height: 5rem;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	border-radius: 0.7rem;
	background-color: inherit;
	transition: all 200ms;
	cursor: pointer;
	border: none;
	text-decoration: none;
	color: ${(props) => props.theme.colors.text};
	&:hover {
		background-color: ${(props) => props.theme.colors.input};
	}
	font-size: 1.4rem;
	font-weight: 500;
	gap: 1rem;
	padding-left: 1rem;
	:focus {
		outline: none;
		background-color: ${(props) => props.theme.colors.input};
	}
	&.current {
		background-color: ${(props) => props.theme.colors.input};
		div {
			background-color: ${(props) => props.theme.colors.primary};
			color: ${(props) => props.theme.colors.light};
		}
	}
`;

export const OptionBarIcon = styled.div`
	height: 3.5rem;
	width: 3.5rem;
	background-color: ${(props) => props.theme.colors.transparent};
	clip-path: circle(50% at 50% 50%);
	color: ${(props) => props.theme.colors.text};
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 2rem;
	}
`;
export const RadioBtn = styled.input`
	appearance: none;
	display: grid;
	place-content: center;
	background-color: ${(props) => props.theme.colors.main};
	margin: 0;
	font: inherit;
	color: ${(props) => props.theme.colors.text};
	width: 1.55rem;
	height: 1.55rem;
	border: 0.15rem solid ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	cursor: pointer;
	::before {
		content: '';
		width: 0.95rem;
		height: 0.95rem;
		border-radius: 50%;
		transform: scale(0);
		transition: 200ms transform ease-in-out;
		box-shadow: inset 1em 1em ${(props) => props.theme.colors.primary};
		background-color: ${(props) => props.theme.colors.primary};
	}
	:checked::before {
		transform: scale(1);
	}
`;

export const RadioLabel = styled.label`
	display: flex;
	gap: 60%;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.colors.text};
	width: 80%;
	font-size: 1.6rem;
	border-radius: 0.7rem;
	height: 5rem;
	cursor: pointer;
	:hover {
		background-color: ${(props) => props.theme.colors.medGrey};
	}
`;

export const MobileOptionsTab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: max-content;
	height: 65%;
	background-color: ${(props) => props.theme.colors.input};
	padding-left: 1.4rem;
	padding-right: 1.4rem;
	border-radius: 1rem;
	font-size: 1.6rem;
	font-weight: 500;
	color: ${(props) => props.theme.colors.text};
	cursor: pointer;
`;
