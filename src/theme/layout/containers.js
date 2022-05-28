import styled from 'styled-components';

export const MainContainer = styled.div`
	height: 100%;
	width: 100vw;
	top: 0;
	left: -40rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 4;
	background-color: ${(props) => props.theme.colors.secondary};
	@media (max-width: 1023px) {
		left: 0;
		top: 0;
		height: calc(100vh - 7vh);
	}
`;

export const MainFormContainer = styled.form`
	height: 70%;
	width: 60rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.2);
	border-radius: 0.8rem;
	padding: 1rem;
	background-color: ${(props) => props.theme.colors.main};
	gap: 1.6rem;
	@media (max-width: 1023px) {
		box-shadow: none;
		height: 100%;
	}
`;

export const ModalOverlay = styled.div`
	position: absolute;
	height: 100%;
	width: 100vw;
	z-index: 20;
	backdrop-filter: blur(2px);
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const MainPageContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.secondary};
	flex-direction: column;
	gap: 1rem;
`;
export const MainPageContainerFullHeight = styled(MainPageContainer)`
	@media screen and (max-width: 1023px) {
		z-index: 3;
		top: 0;
		left: 0;
		position: absolute;
	}
`;

export const DynamicSidebarContainer = styled.div`
	height: 100%;
	width: 40rem;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	box-shadow: 0.5rem 0.1rem 0.6rem -0.5rem rgba(0, 0, 0, 0.1), -0.5rem 0.1rem 0.6rem -0.5rem rgba(0, 0, 0, 0.1);
	background-color: ${(props) => props.theme.colors.main};
	position: relative;
	@media screen and (max-width: 1023px) {
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 4;
		border-bottom: 0.1rem solid ${(props) => props.theme.colors.transparent};
		padding-top: 2rem;
	}
`;

export const ScrollBorderContainer = styled.div`
	width: 90%;
	height: 7%;
	border-bottom: ${(props) =>
		props.scroll !== 0 ? `.1rem solid ${props.theme.colors.medGrey}` : `.1rem solid transparent`};
`;
