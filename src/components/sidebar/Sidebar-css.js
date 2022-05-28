import styled from 'styled-components';
import { DynamicSidebarContainer, ScrollBorderContainer } from '../../theme/layout/containers';

export const SideBarContainer = styled(DynamicSidebarContainer)`
	@media screen and (max-width: 1023px) {
		height: 15%;
		width: 100%;
		border-bottom: 0.1rem solid ${(props) => props.theme.colors.transparent};
	}
`;

export const SideBarSearchBarContainer = styled.div`
	width: 100%;
	height: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: inherit;
	z-index: 2;
	position: relative;
	@media screen and (max-width: 1023px) {
		height: 100%;
	}
`;

export const SearchBarContainerHeader = styled.div`
	width: 90%;
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const SearchBarHeaderText = styled.h2`
	font-size: 2.4rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.text};
`;

export const SearchBar = styled(ScrollBorderContainer)`
	height: 50%;
`;

export const SearchBarInputWrapper = styled.div`
	width: 100%;
	background-color: grey;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
	height: 3.5rem;
	background-color: ${(props) => props.theme.colors.input};
`;
export const SearchBarIconContainer = styled.div`
	height: 100%;
	width: 12%;
	background-color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1rem 0 0 1rem;
	color: ${(props) => props.theme.colors.darkGrey};
	font-size: 1.6rem;
`;
export const SearchBarInput = styled.input`
	width: 90%;
	background-color: inherit;
	outline: none;
	border: none;
	border-radius: 0 1rem 1rem 0;
	height: 100%;
	line-height: 1.6rem;
	padding-right: 0.8rem;
	color: ${(props) => props.theme.colors.text};
`;
export const SidebarOptionsContainer = styled.div`
	width: 100%;
	height: calc(100% - 10rem);
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: inherit;
`;

export const SidebarOptions = styled.div`
	height: max-content;
	width: 88%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: inherit;
	gap: 0.7rem;
	padding: 0.8rem;
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.transparent};
`;

export const MobileOptionsBar = styled.div`
	display: flex;
	flex-direction: row;
	height: 50%;
	width: 100%;
	gap: 1rem;
	align-items: center;
	justify-content: flex-start;
	padding-left: 10%;
`;

export const SideBarListingBtn = styled.button`
	width: 100%;
	height: 4rem;
	border-radius: 0.7rem;
	background-color: #0066ff1a;
	outline: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.primary};
	font-size: 1.4rem;
	cursor: pointer;
	transition: background-color 0.2s;
	&:hover {
		background-color: #0066ff38;
	}
	i {
		margin-right: 1rem;
	}

	:active {
		-webkit-transform: scale(0.98);
		transform: scale(0.98);
	}
	:focus {
		background-color: #0066ff38;
	}
`;
