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
	@media (max-width: 1024px) {
		display: none;
	}
`;

export const SideBarSearchBarContainer = styled.div`
	width: 100%;
	height: 15%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: inherit;
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
	i {
		font-size: 2rem;
	}
`;

export const SearchBar = styled.div`
	width: 90%;
	height: 50%;
	align-items: center;
	justify-content: center;
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
	width: 15%;
	background-color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3rem 0 0 3rem;
	color: ${(props) => props.theme.colors.darkGrey};
	i {
		font-size: 1.6rem;
	}
`;
export const SearchBarInput = styled.input`
	width: 85%;
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
	min-height: 85%;
	overflow: auto;
	background-color: green;
`;
