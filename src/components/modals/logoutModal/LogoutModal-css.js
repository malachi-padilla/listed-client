import styled from 'styled-components';
import { OptionBar, OptionBarIcon } from '../../../theme/layout/customComponents';
import { MainHeader, MainParagraph } from '../../../theme/typography';

export const LogoutModalContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	position: absolute;
	height: 25rem;
	width: 85%;
	background-color: ${(props) => props.theme.colors.main};
	border: 1px solid ${(props) => props.theme.colors.transparent};
	z-index: 20;
	top: 5.5rem;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	border-radius: 0.7rem;
	box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.1);
	gap: 1rem;
	padding: 0.8rem;
	@media (min-width: 500px) {
		margin-right: 2rem;
		width: 35rem;
		top: 6.5rem;
	}
`;

export const ProfileBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.transparent};
	height: 40%;
	width: 90%;
	gap: 1rem;
`;

export const ProfileImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	border: 0.1rem solid ${(props) => props.theme.colors.transparent};
	color: ${(props) => props.theme.colors.light};
	background-color: ${(props) => props.theme.colors.medGrey};
	font-size: 5rem;
	overflow: hidden;
`;

export const ProfileName = styled(MainHeader)`
	font-size: 1.6rem;
	font-weight: 500;
	span {
		color: ${(props) => props.theme.colors.darkGrey};
		font-weight: 300;
		font-size: 1.4rem;
	}
`;

export const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 90%;
	height: 60%;
`;

export const SettingBar = styled(OptionBar)`
	position: relative;
`;

export const SettingBarIcon = styled(OptionBarIcon)``;

export const SettingBarBtn = styled.i`
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.text};
	position: absolute;
	right: 1rem;
`;
export const SettingModalHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 20%;
	gap: 1.5rem;
`;
export const SettingModalHeading = styled(MainHeader)`
	font-size: 2.4rem;
	font-weight: 600;
`;

export const BackBtn = styled.i`
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.text};
`;

export const SettingBox = styled.div`
	display: flex;
	flex-direction: column;
	height: 80%;
	width: 90%;
	align-items: center;
	justify-content: center;
	gap: 1rem;
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

export const SettingIcon = styled.div`
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
