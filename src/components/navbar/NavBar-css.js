import styled from 'styled-components';
import { MainBtn } from '../../theme/btns';
import { MainInput } from '../../theme/layout/customComponents';

export const NavContainer = styled.div`
	width: 100%;
	height: 7%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	z-index: 10;
	box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.1);
	background-color: ${(props) => props.theme.colors.main};
	border-bottom: 1px solid ${(props) => props.theme.colors.transparent};
	position: relative;
`;

export const NavContent = styled.div`
	height: 100%;
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
	padding-right: 1rem;
	@media (max-width: 1023px) {
		width: 90%;
	}
`;

export const Logo = styled.div`
	width: 10%;
	color: ${(props) => props.theme.colors.primary};
	font-size: 3.5rem;
	text-transform: lowercase;
	font-family: 'Fugaz One', cursive;
	cursor: pointer;
	padding-left: 1rem;
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
	color: ${(props) => props.theme.colors.light};
`;
export const BtnSecondary = styled(MainBtn)`
	background-color: ${(props) => props.theme.colors.main};
	color: ${(props) => props.theme.colors.primary};
	border: 0.1rem solid ${(props) => props.theme.colors.primary};
`;

export const NavInput = styled(MainInput)``;

export const NavBtns = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
