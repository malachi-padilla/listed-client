import styled from 'styled-components';
import { OptionBar, OptionBarIcon } from '../../../theme/layout/customComponents';
import { SidebarOptions } from '../Sidebar-css';

export const CategoriesContainer = styled(SidebarOptions)`
	border-bottom: none;
	@media (max-width: 1023px) {
		height: 90%;
	}
`;

export const Category = styled(OptionBar)`
	text-transform: capitalize;
`;
export const CategoryHeader = styled.h2`
	font-size: 1.6rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.text};
	align-self: flex-start;
	margin-bottom: 1rem;
	@media (max-width: 1023px) {
		display: none;
	}
`;

export const CategoryIcon = styled(OptionBarIcon)``;
