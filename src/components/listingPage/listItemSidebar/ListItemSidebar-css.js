import styled from 'styled-components';
import { DynamicSidebarContainer, ScrollBorderContainer } from '../../../theme/layout/containers';
import { MainInput } from '../../../theme/layout/customComponents';
import { MainParagraph, MainHeader } from '../../../theme/typography';
import { ProfileImg } from '../../modals/logoutModal/LogoutModal-css';

export const ListItemSidebarContainer = styled(DynamicSidebarContainer)`
	gap: 1rem;
`;
export const ListItemSidebarHeaderContainer = styled(ScrollBorderContainer)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const HeaderTextBox = styled.div`
	height: 100%;
	width: 70%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const HeaderButtonBox = styled(HeaderTextBox)`
	width: 30%;
	align-items: center;
`;

export const HeaderTag = styled(MainParagraph)`
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.darkGrey};
`;
export const Header = styled(MainHeader)``;

export const ListItemSidebarContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-grow: 1;
	flex-direction: column;
	gap: 1rem;
`;

export const ProfileInfo = styled.div`
	height: 7%;
	width: 90%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
`;

export const ProfileImageSidebar = styled(ProfileImg)`
	height: 4rem;
	width: 4rem;
	font-size: 3rem;
`;

export const ProfileName = styled.p`
	color: ${(props) => props.theme.colors.text};
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2rem;
	span {
		color: ${(props) => props.theme.colors.darkGrey};
		font-weight: 300;
		font-size: 1.2rem;
	}
`;

export const ListItemSidebarForm = styled.form`
	flex-grow: 1;
	width: 100%;
	overflow: auto;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
`;

export const ListItemSidebarInput = styled(MainInput)`
	background-color: transparent;
	width: 80%;
	font-size: 1.6rem;
	padding: 1.6rem 2rem 1.6rem;
	::placeholder {
		font-size: 1.6rem;
	}
`;

export const PhotoUpload = styled.div`
	height: 12rem;
	padding: 1.6rem 2rem 1.6rem;
	background-color: transparent;
	width: 80%;
	font-size: 1.6rem;
	border: 0.1rem solid ${(props) => props.theme.colors.medGrey};
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.text};
	position: relative;
	transition: all 500ms;
	h3 {
		font-weight: 600;
		font-size: 1.6rem;
	}
	p {
		font-weight: 300;
		color: ${(props) => props.theme.colors.darkGrey};
	}
	input {
		z-index: 5;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		opacity: 0;
		cursor: pointer;
	}
	:hover {
		border: 0.1rem solid ${(props) => props.theme.colors.darkGrey};
	}
`;

export const PhotoUploadBtn = styled(ProfileImageSidebar)`
	font-size: 2.2rem;
	align-items: center;
	margin-bottom: 1rem;
	border: none;
	color: ${(props) => props.theme.colors.text};
`;
