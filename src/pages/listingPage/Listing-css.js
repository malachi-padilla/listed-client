import styled from 'styled-components';
import { MainPageContainer, MainPageContainerFullHeight } from '../../theme/layout/containers';
import { MainHeader } from '../../theme/typography';

export const ListingPageContainer = styled(MainPageContainerFullHeight)``;

export const ListingPageContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 65%;
	width: 90%;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;
	@media (min-width: 1023px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: fit-content;
	}
`;

export const ListingPageHeader = styled(MainHeader)`
	font-size: 2rem;
	font-weight: 600;
`;

export const ListingType = styled.div`
	width: 100%;
	height: 15rem;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.main};
	box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.1);
	border-radius: 0.8rem;
	color: ${(props) => props.theme.colors.text};
	cursor: pointer;
	transition: all 250ms ease-in-out;
	:hover {
		box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.3);
	}
	h2 {
		font-size: 1.6rem;
	}
	p {
		font-size: 1.2rem;
		color: ${(props) => props.theme.colors.darkGrey};
	}
	@media (min-width: 1023px) {
		width: 20rem;
		height: 30rem;
		padding: 0.8rem;
	}
`;

export const ListingTypeImage = styled.div`
	height: 50%;
	width: 10rem;
	background-image: url(${(props) => props.Image});
	background-repeat: no-repeat;
	background-position: cover;
	background-position: center;
`;
