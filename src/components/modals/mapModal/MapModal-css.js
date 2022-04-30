import styled from 'styled-components';
import { CircleBtn, MainBtn } from '../../../theme/btns';
import { MainHeader } from '../../../theme/typography';

export const MapModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 70%;
	width: 60rem;
	background-color: ${(props) => props.theme.colors.main};
	box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
	border-radius: 0.7rem;
	overflow: hidden;
`;

export const MapModalHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 10%;
	width: 100%;
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.transparent};
	position: relative;
`;

export const MapModalHeaderText = styled(MainHeader)`
	font-size: 2.2rem;
	font-weight: 600;
`;

export const MapModalBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80%;
	width: 100%;
`;

export const MapModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 10%;
	width: 100%;
	border-top: 0.1rem solid ${(props) => props.theme.colors.transparent};
	align-self: flex-end;
	padding-right: 1rem;
`;

export const ApplyBtn = styled(MainBtn)`
	background-color: ${(props) => props.theme.colors.primary};
`;
