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
`;

export const OptionBar = styled.button`
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
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
	font-size: 1.4rem;
	font-weight: 500;
	gap: 1rem;
	padding-left: 1rem;
	:focus {
		outline: none;
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;

export const OptionBarIcon = styled.div`
	height: 3.5rem;
	width: 3.5rem;
	background-color: ${(props) => props.theme.colors.medGrey};
	clip-path: circle(50% at 50% 50%);
	color: ${(props) => props.theme.colors.dark};
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 2rem;
	}
`;

export const OptionBarSelected = styled(OptionBar)`
	background-color: ${(props) => props.theme.colors.secondary};
	div {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.main};
	}
`;
