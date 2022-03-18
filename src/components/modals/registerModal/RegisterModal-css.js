import styled from 'styled-components';
import Img from '../../../assets/listedHeroPic.jpg';
import { MainHeader, MainParagraph } from '../../../theme/typography';
export const RegisterModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 60%;
	width: 60%;
	background-color: ${(props) => props.theme.colors.main};
	box-shadow: 0.4rem 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
	border-radius: 0.7rem;
	overflow: hidden;
`;

export const RegisterModalHero = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${Img});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const HeroContents = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background-color: rgba(0, 0, 0, 0.5);
	flex-direction: column;
	padding: 5rem;
	gap: 2rem;
`;

export const HeroHeader = styled(MainHeader)`
	color: ${(props) => props.theme.colors.light};
`;

export const HeroParagraph = styled(MainParagraph)`
	color: ${(props) => props.theme.colors.light};
`;

export const HeroList = styled.ul`
	text-decoration: none;
	list-style: none;
	color: ${(props) => props.theme.colors.light};
	font-size: 1.6rem;
	font-weight: 300;

	li {
		margin-bottom: 1rem;
		i {
			margin-right: 1rem;
		}
	}
`;
export const RegisterModalForm = styled.form`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.6rem;
`;
