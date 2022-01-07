import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.secondary};
`;
