import styled from 'styled-components';

export const MainContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.secondary};
`;

export const MainFormContainer = styled.form`
	height: 50%;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.2);
	border-radius: 0.8rem;
	/* padding: 2rem 0; */
	background-color: ${(props) => props.theme.colors.main};
	gap: 1.6rem;
	@media (max-width: 1024px) {
		width: 100%;
		height: 100%;
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;
