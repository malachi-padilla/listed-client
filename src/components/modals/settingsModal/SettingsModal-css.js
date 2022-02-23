import styled from 'styled-components';
import { ModalOverlay } from '../../../theme/layout/containers';
import { MainHeader, MainParagraph } from '../../../theme/typography';
import { SearchBarHeaderBtn } from '../../sidebar/Sidebar-css';

export const SettingsModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	height: 35%;
	width: calc(40rem * 0.9);
	background-color: ${(props) => props.theme.colors.main};
	border: 1px solid ${(props) => props.theme.colors.transparent};
	z-index: 20;
	top: 5rem;
	left: 1.8rem;
	border-radius: 0.7rem;
	box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.1);
`;

export const SettingBox = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 90%;
	align-items: center;
	justify-content: center;
`;

export const SettingBoxHeader = styled.div`
	display: flex;
	flex-direction: row;
	height: 20%;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 3rem;
`;

export const SettingTextBox = styled.div`
	width: 80%;
	align-self: flex-start;
`;

export const Settingicon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: none;
	clip-path: circle(50% at 50% 50%);
	height: 4rem;
	width: 4rem;
	background-color: ${(props) => props.theme.colors.medGrey};
	color: ${(props) => props.theme.colors.text};
	font-size: 2rem;
	transition: all 200ms;
	align-self: flex-start;
`;
export const SettingTitle = styled(MainHeader)`
	font-size: 1.6rem;
	font-weight: 600;
	margin-bottom: 0.2rem;
`;
export const SettingDescription = styled(MainParagraph)`
	font-size: 1.4rem;
	opacity: 60%;
`;

export const SettingsModalOverlay = styled(ModalOverlay)`
	backdrop-filter: blur(0px);
`;
