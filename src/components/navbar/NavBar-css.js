import styled from 'styled-components';
import { MainBtn } from '../../theme/btns';

export const NavContainer = styled.div`
	width: 100vw;
	height: 7vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.colors.main};
`;

export const NavContent = styled.div`
	height: 100%;
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.h2`
	color: ${(props) => props.theme.colors.primary};
	font-size: 3.5rem;
	text-transform: lowercase;
	font-family: 'Fugaz One', cursive;
`;

export const NavForm = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const BtnPrimary = styled(MainBtn)`
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.main};
`;
export const BtnSecondary = styled(MainBtn)`
	background-color: ${(props) => props.theme.colors.main};
	color: ${(props) => props.theme.colors.primary};
	border: 0.1rem solid ${(props) => props.theme.colors.primary};
`;
