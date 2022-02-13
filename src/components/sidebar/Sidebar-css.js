import styled from 'styled-components';
import { MainBtn } from '../../theme/btns';

export const SideBarContainer = styled.div`
	height: 100%;
	width: 25%;
	z-index: 2;
	display: flex;
	flex-direction: column;
	box-shadow: 0.5rem 0.1rem 0.6rem -0.5rem rgba(0, 0, 0, 0.1), -0.5rem 0.1rem 0.6rem -0.5rem rgba(0, 0, 0, 0.1);
	background-color: ${(props) => props.theme.colors.main};
	@media (min-width: 1800px) {
		width: 20%;
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
`;
export const SearchBarHeaderBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: none;
	clip-path: circle(50% at 50% 50%);
	height: 3.5rem;
	width: 3.5rem;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.dark};
	font-size: 2rem;
	cursor: pointer;
	transition: all 200ms;
	&:hover {
		background-color: ${(props) => props.theme.colors.medGrey};
	}
`;

export const SearchBar = styled.div`
	width: 90%;
	height: 50%;
	align-items: center;
	justify-content: center;
	border-bottom: ${(props) =>
		props.scroll !== 0 ? `.1rem solid ${props.theme.colors.medGrey}` : `.1rem solid transparent`};
`;

export const SearchBarInputWrapper = styled.div`
	width: 100%;
	background-color: grey;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 3rem;
	height: 3.5rem;
	background-color: ${(props) => props.theme.colors.secondary};
`;
export const SearchBarIconContainer = styled.div`
	height: 100%;
	width: 12%;
	background-color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3rem 0 0 3rem;
	color: ${(props) => props.theme.colors.darkGrey};
	font-size: 1.6rem;
`;
export const SearchBarInput = styled.input`
	width: 90%;
	background-color: inherit;
	outline: none;
	border: none;
	border-radius: 0 3rem 3rem 0;
	height: 100%;
	line-height: 1.6rem;
	padding-right: 0.8rem;
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
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.medGrey};
`;

export const SideBarBtn = styled.button`
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
