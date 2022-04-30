import styled from 'styled-components';
import { MainHeader } from '../../../theme/typography';

export const CategoryModalContainer = styled.div`
	z-index: 3;
	height: calc(100vh - 7vh);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0px;
	left: 0px;
	background-color: inherit;
`;

export const CategoryModalHeader = styled.div`
	height: 10%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.transparent};
	font-size: 1.6rem;
	font-weight: 600;
`;

export const CategoryHeaderText = styled(MainHeader)`
	font-size: 1.6rem;
	font-weight: 600;
`;
