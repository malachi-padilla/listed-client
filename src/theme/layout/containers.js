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
	z-index: 5;
	background-color: ${(props) => props.theme.colors.secondary};
	@media (max-width: 1023px) {
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
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
		width: 100%;
		height: 100%;
		background-color: ${(props) => props.theme.colors.main};
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
`;
