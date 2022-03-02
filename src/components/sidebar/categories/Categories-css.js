import styled from 'styled-components';
import { OptionBar, OptionBarIcon } from '../../../theme/layout/customComponents';
import { SidebarFilterHeader } from '../filters/Filters-css';
import { SidebarOptions } from '../Sidebar-css';

export const CategoriesContainer = styled(SidebarOptions)``;

export const Category = styled(OptionBar)`
	text-transform: capitalize;
`;
export const CategoryHeader = styled.h2`
	font-size: 1.6rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.text};
	align-self: flex-start;
	margin-bottom: 1rem;
`;

export const CategoryIcon = styled(OptionBarIcon)``;
