import styled from 'styled-components';

export const SearchModalContainer = styled.div`
	position: absolute;
	overflow: auto;
	width: 100%;
	min-height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0.5rem 0.5rem 0.6rem -0.5rem rgba(0, 0, 0, 0.1), -0.5rem 0.1rem 0.6rem -0.5rem rgba(0, 0, 0, 0.1);
	z-index: 2;
	background-color: inherit;
	top: 9.5rem;
	border-radius: 0 0 1.4rem 1.4rem;
	font-size: 1.4rem;
	color: ${(props) => props.theme.colors.darkGrey};
	@media screen and (max-width: 1023px) {
		top: 11rem;
	}
	@media screen and (max-width: 768px) {
		top: 10rem;
	}
`;
