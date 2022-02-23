import styled from 'styled-components';
import { MainBtn } from '../../theme/btns';
import { MainContainer } from '../../theme/layout/containers';
import { MainInput } from '../../theme/layout/customComponents';

export const RegisterPageContainer = styled(MainContainer)``;

export const FormInput = styled(MainInput)`
	width: 80%;
	font-size: 1.6rem;
	padding: 1.6rem 2rem 1.6rem;
	::placeholder {
		font-size: 1.6rem;
	}
	border: ${(props) => (props.error ? ` 1px solid ${props.theme.colors.errorRed} ` : null)};
`;

export const FormBtn = styled(MainBtn)`
	width: 80%;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.light};
	padding: 2rem;
	font-size: 2rem;
	text-transform: none;
`;

export const FormHeader = styled.h2`
	color: ${(props) => props.theme.colors.text};
	font-size: 3rem;
	text-transform: capitalize;
`;

export const FormSubHeader = styled.h3`
	color: ${(props) => props.theme.colors.darkGrey};
	font-size: 1.6rem;
	text-transform: none;
	font-weight: 400;
`;

export const FormLink = styled.h3`
	color: ${(props) => props.theme.colors.primary};
	font-size: 1.4rem;
	font-weight: 400;
	cursor: pointer;
`;
