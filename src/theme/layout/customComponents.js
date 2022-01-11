import styled from 'styled-components';

export const MainInput = styled.input`
	border-radius: 0.5rem;
	outline: none;
	line-height: 1.6rem;
	padding: 0.8rem 1.2rem 1rem;
	border: none;
	border: 0.1rem solid ${(props) => props.theme.colors.medGrey};
	transition: all 500ms;
	:hover {
		border: 0.1rem solid ${(props) => props.theme.colors.darkGrey};
	}
	::placeholder {
		font-weight: 500;
		font-size: 1.4rem;
		color: ${(props) => props.theme.colors.darkGrey};
		opacity: 0.8;
	}
`;
