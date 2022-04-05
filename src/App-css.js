import styled from 'styled-components';

export const AppContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ContentContainer = styled.div`
	height: calc(100vh - 7vh);
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const PageContainer = styled.div`
	height: 100%;
	width: calc(100% - 40rem);
	align-items: center;
	justify-content: center;
	position: relative;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;
