import styled from 'styled-components';
import { DynamicSidebarContainer } from '../../theme/layout/containers';

export const ListingSidebarContainer = styled(DynamicSidebarContainer)`
	@media screen and (max-width: 1023px) {
		display: none;
	}
`;

export const HeaderContainer = styled.div`
	height: 15%;
	display: flex;
	flex-direction: column;
	width: 90%;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.transparent};
`;
