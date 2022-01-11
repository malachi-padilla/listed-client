import styled from 'styled-components';

export const SideBarContainer = styled.div`
	height: 100%;
	width: 25%;
	z-index: 2;
	box-shadow: 0.5rem 0.1rem 0.6rem -0.5rem rgba(0, 0, 0, 0.2), -0.5rem 0.1rem 0.6rem -0.5rem rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.colors.main};
	@media (max-width: 1024px) {
		display: none;
	}
`;
