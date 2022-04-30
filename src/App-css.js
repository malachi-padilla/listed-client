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
	height: 93%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	@media screen and (max-width: 1023px) {
		flex-direction: column;
	}
`;

export const PageContainer = styled.div`
	height: 100%;
	width: calc(100% - 40rem);
	align-items: center;
	justify-content: center;
	position: relative;
	@media (max-width: 1023px) {
		height: 85%;
		width: 100%;
		position: unset;
	}
`;
